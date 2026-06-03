import os
import glob
import json
import shutil
import re

DATA_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\data"
ASSETS_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\assets"
CONTENT_FILE = os.path.join(DATA_DIR, "content_test.ts")

dirs_to_process = [
    "From Paris to Morocco One Foot Rider Shares an Inspiring Story of Resilience and Road Safety",
    "Cyclone at “Be Careful” El Jadida Balancing the Passion for Adventure with Safety First",
    "Royal Enfield in Morocco A Classic Legend Reborn with Modern Flair"
]

# Determine next image index by looking at existing assets
assets_files = os.listdir(ASSETS_DIR)
news_more_indices = []
for f in assets_files:
    m = re.match(r'news_more_(\d+)', f)
    if m:
        news_more_indices.append(int(m.group(1)))

next_idx = max(news_more_indices) + 1 if news_more_indices else 0

new_imports = []
new_articles = []

for d_name in dirs_to_process:
    d = os.path.join(DATA_DIR, d_name)
    print(f"Processing {d}...")
    article_md = os.path.join(d, "article.md")
    if not os.path.exists(article_md):
        print(f"File not found: {article_md}")
        continue
    
    with open(article_md, 'r', encoding='utf-8') as f:
        md_text = f.read()
    
    lines = md_text.split('\n')
    title = ""
    body_lines = []
    
    blocks = md_text.split('\n\n')
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        if block.startswith('# ') and not title:
            title = block[2:].strip()
        elif block.startswith('# '):
            body_lines.append(f"<h3>{block[2:].strip()}</h3>")
        elif block.startswith('## '):
            body_lines.append(f"<h4>{block[3:].strip()}</h4>")
        elif block.startswith('![]'):
            continue # skip inline images, we will use images/ folder
        else:
            # Check if list
            if block.startswith('- ') or block.startswith('* '):
                items = re.findall(r'^[-*]\s+(.*)', block, re.MULTILINE)
                list_html = "<ul>" + "".join([f"<li>{item}</li>" for item in items]) + "</ul>"
                body_lines.append(list_html)
            else:
                # Replace bold
                block = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', block)
                if '<strong>' in block:
                    body_lines.append(f"<p>{block}</p>")
                else:
                    # just text
                    body_lines.append(block)
            
    if not title:
        title = d_name
        
    excerpt = ""
    for b in body_lines:
        if not b.startswith('<'):
            excerpt = b
            break
    if not excerpt and body_lines:
        excerpt = body_lines[0].replace('<p>', '').replace('</p>', '').replace('<strong>', '').replace('</strong>', '')
    
    t_title = {
        "fr": title,
        "en": title,
        "es": title,
        "it": title
    }
    
    t_excerpt = {
        "fr": excerpt,
        "en": excerpt,
        "es": excerpt,
        "it": excerpt
    }
    
    t_body = {"fr": [], "en": [], "es": [], "it": []}
    for bl in body_lines:
        t_body["fr"].append(bl)
        t_body["en"].append(bl)
        t_body["es"].append(bl)
        t_body["it"].append(bl)
        
    # Handle Images
    images_dir = os.path.join(d, "images")
    img_imports = []
    
    if os.path.exists(images_dir):
        imgs = [f for f in os.listdir(images_dir) if f.endswith(('.jpg', '.jpeg', '.png', '.webp', '.avif'))]
        imgs.sort() # Ensure stable order
        for img_file in imgs:
            img_path = os.path.join(images_dir, img_file)
            ext = os.path.splitext(img_path)[1]
            new_img_name = f"news_more_{next_idx}{ext}"
            new_img_path = os.path.join(ASSETS_DIR, new_img_name)
            shutil.copy2(img_path, new_img_path)
            
            img_import_name = f"newsMore{next_idx}"
            new_imports.append(f'import {img_import_name} from "@/assets/{new_img_name}";\n')
            img_imports.append(img_import_name)
            next_idx += 1
            
    main_image = img_imports[0] if img_imports else "newsNew0"
    extra_images = img_imports[1:] if len(img_imports) > 1 else []
        
    base_id = re.sub(r'[^a-z0-9]+', '-', t_title["en"].lower()).strip('-')
    words = sum(len(p.split()) for p in t_body["en"])
    read_time = f"{max(1, words // 200)} min"
    
    article_obj = {
        "id": base_id,
        "title": t_title,
        "excerpt": t_excerpt,
        "image": main_image,
        "category": "New Bikes",
        "readTime": read_time,
        "body": t_body,
    }
    if extra_images:
        article_obj["extraImages"] = extra_images
    
    json_str = json.dumps(article_obj, ensure_ascii=False, indent=4)
    json_str = re.sub(r'"image":\s*"([^"]+)"', r'"image": \1', json_str)
    if extra_images:
        for ex in extra_images:
            json_str = json_str.replace(f'"{ex}"', ex)
            
    new_articles.append(json_str)

if new_articles:
    with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
        ts_lines = f.readlines()
        
    import_insert_idx = 0
    articles_insert_idx = 0
    
    for i, line in enumerate(ts_lines):
        if line.startswith('export const articles: Article[] = ['):
            articles_insert_idx = i + 1
        if line.startswith('import ') and 'from "@/assets/' in line:
            import_insert_idx = i + 1
            
    # Insert articles first (bottom up so indices don't shift for imports if imports are above)
    if articles_insert_idx > 0:
        articles_str = ',\n'.join(new_articles) + ',\n'
        ts_lines.insert(articles_insert_idx, articles_str)
        
    if import_insert_idx > 0:
        ts_lines.insert(import_insert_idx, "".join(new_imports))
        
    with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
        f.writelines(ts_lines)
        
    print("Done generating content.ts! Inserted new articles cleanly.")
else:
    print("No articles processed.")
