import os
import glob
import re
import shutil
import urllib.parse
import json

DATA_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\data"
ASSETS_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\assets"
CONTENT_FILE = os.path.join(DATA_DIR, "content.ts")

# 16 target folders to process in order
folders = [
    "From Paris to Morocco One Foot Rider Shares an Inspiring Story of Resilience and Road Safety",
    "Cyclone at “Be Careful” El Jadida Balancing the Passion for Adventure with Safety First",
    "Royal Enfield in Morocco A Classic Legend Reborn with Modern Flair",
    "2025 Husqvarna Vitpilen 801 MD Ride Review",
    "All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS - EICMA",
    "Benelli BKX 300 e BKX 300 S due anime, un solo motore - EICMA",
    "Ducati Reinvents the Hypermotard for 2026",
    "Honda Debuts V3R 900 Prototype at EICMA",
    "KTM Unveils Production 990 RC R",
    "Morbidelli N125V, si guida a 16 anni ma fa sognare in grande - EICMA",
    "Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience - EICMA",
    "MV Agusta Rush Titanio motore rivisto, sospensioni elettroniche evolute e finiture di pregio - EICMA",
    "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT",
    "Triumph Announces New Trident 800",
    "Yamaha NMax 155 Tech Max, con la trasmissione YECVT ha una marcia in più - EICMA",
    "Zontes ZT368-G ETC, più tecnologia e comfort per il 2026 - EICMA"
]

CATEGORY_MAPPING = {
    "From Paris to Morocco One Foot Rider Shares an Inspiring Story of Resilience and Road Safety": "Safety",
    "Cyclone at “Be Careful” El Jadida Balancing the Passion for Adventure with Safety First": "Safety",
    "Royal Enfield in Morocco A Classic Legend Reborn with Modern Flair": "New Bikes",
}

def inline_format(text):
    text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'__(.*?)__', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.*?)\*', r'<em>\1</em>', text)
    text = re.sub(r'_(.*?)_', r'<em>\1</em>', text)
    text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2" class="text-accent hover:underline" target="_blank" rel="noopener noreferrer">\1</a>', text)
    return text

def render_spec_category(category_name, pairs):
    html = []
    html.append('<div class="my-6 border border-border rounded-2xl bg-card overflow-hidden">')
    if category_name:
        html.append(f'  <div class="px-6 py-4 bg-surface border-b border-border">')
        html.append(f'    <h3 class="font-display text-sm font-bold text-ink uppercase tracking-wider">{category_name}</h3>')
        html.append(f'  </div>')
    html.append('  <div class="divide-y divide-border">')
    for k, v in pairs:
        html.append('    <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] px-6 py-3 hover:bg-surface/30 transition-colors">')
        html.append(f'      <div class="text-sm font-semibold text-ink">{inline_format(k)}</div>')
        html.append(f'      <div class="text-sm text-foreground md:mt-0 mt-1 whitespace-pre-wrap">{inline_format(v)}</div>')
        html.append('    </div>')
    html.append('  </div>')
    html.append('</div>')
    return '\n'.join(html)

def parse_specifications(blocks):
    spec_htmls = []
    current_category = None
    current_pairs = []
    
    idx = 0
    while idx < len(blocks):
        block = blocks[idx].strip()
        if not block:
            idx += 1
            continue
            
        if block.startswith('#'):
            if current_category or current_pairs:
                spec_htmls.append(render_spec_category(current_category, current_pairs))
                current_pairs = []
                current_category = None
            break
            
        if block.isupper() and len(block) < 50:
            if current_category or current_pairs:
                spec_htmls.append(render_spec_category(current_category, current_pairs))
                current_pairs = []
            current_category = block
            idx += 1
            continue
            
        if len(block.split()) > 15 or block.startswith(('EURO', 'Figures for', 'They may not')):
            if current_category or current_pairs:
                spec_htmls.append(render_spec_category(current_category, current_pairs))
                current_pairs = []
                current_category = None
            spec_htmls.append(f'<p class="text-sm text-muted-foreground italic my-4">{inline_format(block)}</p>')
            idx += 1
            continue
            
        if idx + 1 < len(blocks):
            key = block
            val = blocks[idx + 1].strip()
            if (val.isupper() and len(val) < 50) or val.startswith('#'):
                if current_category or current_pairs:
                    spec_htmls.append(render_spec_category(current_category, current_pairs))
                    current_pairs = []
                    current_category = None
                spec_htmls.append(f'<p class="text-lg text-foreground leading-relaxed">{inline_format(key)}</p>')
                idx += 1
            else:
                current_pairs.append((key, val))
                idx += 2
        else:
            if current_category or current_pairs:
                spec_htmls.append(render_spec_category(current_category, current_pairs))
                current_pairs = []
                current_category = None
            spec_htmls.append(f'<p class="text-lg text-foreground leading-relaxed">{inline_format(block)}</p>')
            idx += 1
            
    if current_category or current_pairs:
        spec_htmls.append(render_spec_category(current_category, current_pairs))
        
    return spec_htmls, idx

def parse_markdown(md_text):
    md_text = md_text.replace('\r\n', '\n')
    lines = md_text.split('\n')
    
    html_blocks = []
    title = ""
    
    current_paragraphs = []
    current_list_type = None
    current_list_items = []
    current_table_lines = []
    
    def flush_current():
        nonlocal current_paragraphs, current_list_type, current_list_items, current_table_lines
        
        if current_paragraphs:
            p_text = ' '.join(current_paragraphs).strip()
            if p_text:
                is_first = len(html_blocks) == 0
                if is_first:
                    html_blocks.append(f'<p class="font-display text-2xl text-ink leading-relaxed first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none">{inline_format(p_text)}</p>')
                else:
                    html_blocks.append(f'<p class="text-lg text-foreground leading-relaxed">{inline_format(p_text)}</p>')
            current_paragraphs = []
            
        elif current_list_type:
            list_class = 'list-disc pl-6 my-4 space-y-2 text-lg text-foreground leading-relaxed' if current_list_type == 'ul' else 'list-decimal pl-6 my-4 space-y-2 text-lg text-foreground leading-relaxed'
            html = [f'<{current_list_type} class="{list_class}">']
            for item in current_list_items:
                html.append(f'  <li>{inline_format(item)}</li>')
            html.append(f'</{current_list_type}>')
            html_blocks.append('\n'.join(html))
            current_list_type = None
            current_list_items = []
            
        elif current_table_lines:
            table_lines = [l.strip() for l in current_table_lines if l.strip()]
            if len(table_lines) >= 2:
                sep_idx = -1
                for i_line, line in enumerate(table_lines):
                    cells = [c.strip() for c in line.split('|')[1:-1]]
                    if cells and all(all(char in '-: ' for char in c) and len(c) > 0 for c in cells):
                        sep_idx = i_line
                        break
                        
                if sep_idx != -1:
                    header_cells = [c.strip() for c in table_lines[0].split('|')[1:-1]]
                    body_rows = []
                    for i_line, line in enumerate(table_lines):
                        if i_line == 0 or i_line == sep_idx:
                            continue
                        cells = [c.strip() for c in line.split('|')[1:-1]]
                        body_rows.append(cells)
                        
                    html = []
                    html.append('<div class="overflow-x-auto my-8 border border-border rounded-xl">')
                    html.append('  <table class="min-w-full divide-y divide-border">')
                    html.append('    <thead class="bg-surface">')
                    html.append('      <tr>')
                    for cell in header_cells:
                        html.append(f'        <th class="px-4 py-3 text-left text-sm font-semibold text-ink">{inline_format(cell)}</th>')
                    html.append('      </tr>')
                    html.append('    </thead>')
                    html.append('    <tbody class="divide-y divide-border bg-card">')
                    for row in body_rows:
                        html.append('      <tr>')
                        for cell in row:
                            html.append(f'        <td class="px-4 py-3 text-sm text-foreground">{inline_format(cell)}</td>')
                        html.append('      </tr>')
                    html.append('    </tbody>')
                    html.append('  </table>')
                    html.append('</div>')
                    html_blocks.append('\n'.join(html))
            current_table_lines = []

    idx = 0
    while idx < len(lines):
        line = lines[idx]
        stripped = line.strip()
        
        if stripped.startswith('# ') and not title:
            title = stripped[2:].strip()
            idx += 1
            continue
            
        if stripped.startswith('![]') or (stripped.startswith('![') and stripped.endswith(')')):
            idx += 1
            continue
            
        if stripped.upper() in ('SPECIFICATION', 'SPECIFICATIONS'):
            flush_current()
            spec_blocks = []
            spec_idx = idx + 1
            while spec_idx < len(lines):
                s_line = lines[spec_idx].strip()
                if s_line.startswith('#'):
                    break
                if s_line:
                    spec_blocks.append(s_line)
                spec_idx += 1
                
            spec_htmls, spec_consumed = parse_specifications(spec_blocks)
            html_blocks.extend(spec_htmls)
            idx = spec_idx
            continue
            
        if not stripped:
            flush_current()
            idx += 1
            continue
            
        if stripped.startswith('#'):
            flush_current()
            m = re.match(r'^(#+)\s*(.*)', stripped)
            if m:
                level = len(m.group(1))
                text = m.group(2).strip()
                formatted_text = inline_format(text)
                if level == 2:
                    html_blocks.append(f'<h2 class="font-display text-3xl font-bold text-ink mt-8 mb-4">{formatted_text}</h2>')
                elif level == 3:
                    html_blocks.append(f'<h3 class="font-display text-2xl font-bold text-ink mt-6 mb-3">{formatted_text}</h3>')
                else:
                    html_blocks.append(f'<h4 class="font-display text-xl font-bold text-ink mt-4 mb-2">{formatted_text}</h4>')
            idx += 1
            continue
            
        if '|' in line:
            if current_paragraphs or current_list_type:
                flush_current()
            current_table_lines.append(line)
            idx += 1
            continue
            
        is_ul_item = stripped.startswith(('* ', '- ', '+ '))
        is_ol_item = re.match(r'^\d+\.\s', stripped) is not None
        
        if is_ul_item or is_ol_item:
            item_type = 'ul' if is_ul_item else 'ol'
            if current_list_type != item_type or current_paragraphs or current_table_lines:
                flush_current()
            current_list_type = item_type
            item_text = re.sub(r'^(\*|-|\+|\d+\.)\s*', '', stripped)
            current_list_items.append(item_text)
            idx += 1
            continue
            
        if stripped.startswith('>'):
            flush_current()
            bq_lines = []
            while idx < len(lines) and lines[idx].strip().startswith('>'):
                bq_lines.append(lines[idx].strip()[1:].strip())
                idx += 1
            bq_text = ' '.join(bq_lines)
            html_blocks.append(f'<blockquote class="border-l-4 border-accent pl-6 py-2 my-6 italic text-xl text-ink">{inline_format(bq_text)}</blockquote>')
            continue
            
        if current_list_type or current_table_lines:
            flush_current()
        current_paragraphs.append(stripped)
        idx += 1
        
    flush_current()
    return title, html_blocks

def get_ordered_images(article_dir, md_text):
    refs = re.findall(r'!\[.*?\]\(([^)]+)\)', md_text)
    images = []
    
    for ref in refs:
        ref_unquoted = urllib.parse.unquote(ref)
        filename = os.path.basename(ref_unquoted)
        img_path = os.path.join(article_dir, "images", filename)
        if os.path.exists(img_path) and img_path not in images:
            images.append(img_path)
            
    images_dir = os.path.join(article_dir, "images")
    if not images and os.path.exists(images_dir):
        files = [f for f in os.listdir(images_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.avif'))]
        files.sort()
        for f in files:
            img_path = os.path.join(images_dir, f)
            if img_path not in images:
                images.append(img_path)
                
    return images

# Read original content.ts
with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
    content_ts = f.read()

# Extract original suffix
target_id = '"id": "aprilia-and-marco-bezzecchi-beginning-to-look-unstoppable"'
target_idx = content_ts.find(target_id)
if target_idx == -1:
    target_id = "'id': 'aprilia-and-marco-bezzecchi-beginning-to-look-unstoppable'"
    target_idx = content_ts.find(target_id)
if target_idx == -1:
    print("Error: Could not find Aprilia article in content.ts")
    exit(1)

brace_idx = content_ts.rfind('{', 0, target_idx)
if brace_idx == -1:
    print("Error: Could not find Aprilia opening brace")
    exit(1)

end_idx = content_ts.find('];', brace_idx)
if end_idx == -1:
    print("Error: Could not find end of articles array")
    exit(1)

suffix = content_ts[brace_idx:end_idx].strip()

# Split header up to export const articles: Article[] = [
articles_start_marker = 'export const articles: Article[] = ['
start_idx = content_ts.find(articles_start_marker)
if start_idx == -1:
    print("Error: Could not find articles array start")
    exit(1)

header_block = content_ts[:start_idx]

# Filter out old newsNew imports from the header block
header_lines = header_block.split('\n')
filtered_header_lines = [l for l in header_lines if not l.strip().startswith('import newsNew')]
filtered_header = '\n'.join(filtered_header_lines)

# Process folders
new_imports = []
new_articles_json = []

for i, folder_name in enumerate(folders):
    folder_path = os.path.join(DATA_DIR, folder_name)
    print(f"Processing {folder_name}...")
    
    article_md = os.path.join(folder_path, "article.md")
    if not os.path.exists(article_md):
        print(f"Warning: {article_md} does not exist. Skipping.")
        continue
        
    with open(article_md, 'r', encoding='utf-8') as f:
        md_text = f.read()
        
    title, html_blocks = parse_markdown(md_text)
    
    if not title:
        title = folder_name
        
    # Extract excerpt from the first paragraph or block (strip tags)
    excerpt = ""
    for block in html_blocks:
        if block.startswith('<p'):
            excerpt = re.sub(r'<[^>]+>', '', block).strip()
            break
    if not excerpt and html_blocks:
        excerpt = re.sub(r'<[^>]+>', '', html_blocks[0]).strip()
        
    # Handle images
    article_images = get_ordered_images(folder_path, md_text)
    img_import_vars = []
    
    for j, img_path in enumerate(article_images):
        ext = os.path.splitext(img_path)[1]
        new_img_name = f"news_new_p_{i}_{j}{ext}"
        new_img_path = os.path.join(ASSETS_DIR, new_img_name)
        
        # Copy image file to assets
        shutil.copy2(img_path, new_img_path)
        
        import_var = f"newsNewP_{i}_{j}"
        new_imports.append(f'import {import_var} from "@/assets/{new_img_name}";')
        img_import_vars.append(import_var)
        
    main_image_var = img_import_vars[0] if img_import_vars else "newsNew0" # fallback
    extra_image_vars = img_import_vars[1:] if len(img_import_vars) > 1 else []
    
    # Calculate readTime
    words_count = 0
    for block in html_blocks:
        plain = re.sub(r'<[^>]+>', '', block)
        words_count += len(plain.split())
    read_time = f"{max(1, words_count // 200)} min"
    
    base_id = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
    category = CATEGORY_MAPPING.get(folder_name, "New Bikes")
    
    # Construct JSON
    article_obj = {
        "id": base_id,
        "title": {
            "fr": title,
            "en": title,
            "es": title,
            "it": title
        },
        "excerpt": {
            "fr": excerpt,
            "en": excerpt,
            "es": excerpt,
            "it": excerpt
        },
        "image": "IMAGE_VAR_PLACEHOLDER",
        "category": category,
        "readTime": read_time,
        "body": {
            "fr": html_blocks,
            "en": html_blocks,
            "es": html_blocks,
            "it": html_blocks
        }
    }
    if extra_image_vars:
        article_obj["extraImages"] = extra_image_vars
        
    json_str = json.dumps(article_obj, ensure_ascii=False, indent=4)
    # Replace main image placeholder
    json_str = json_str.replace('"image": "IMAGE_VAR_PLACEHOLDER"', f'"image": {main_image_var}')
    # Remove quotes from extra images array elements
    if extra_image_vars:
        json_str = re.sub(r'"extraImages":\s*\[\s*([^\]]*?)\s*\]', lambda m: '"extraImages": [' + m.group(1).replace('"', '') + ']', json_str)
        
    new_articles_json.append(json_str)

# Combine and write content.ts
import_statements = '\n'.join(new_imports)
new_articles_block = ',\n'.join(new_articles_json)

# We want the imports to be after the original imports but before types
# Let's find where to insert the new imports in filtered_header.
# Usually we can append them at the end of the imports block.
# Let's find the last import line in filtered_header.
lines = filtered_header.split('\n')
last_import_line_idx = -1
for idx, line in enumerate(lines):
    if line.strip().startswith('import '):
        last_import_line_idx = idx

if last_import_line_idx != -1:
    lines.insert(last_import_line_idx + 1, import_statements)
else:
    # If no import found, prepend
    lines.insert(0, import_statements)

filtered_header_with_imports = '\n'.join(lines)

final_content = (
    filtered_header_with_imports.rstrip() + '\n\n' +
    articles_start_marker + '\n' +
    new_articles_block + ',\n' +
    suffix + '\n' +
    content_ts[end_idx:]
)

with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Successfully processed {len(new_articles_json)} articles and updated content.ts!")
