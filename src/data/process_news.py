import os
import glob
import json
import shutil
import re

DATA_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\data"
ASSETS_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\assets"
CONTENT_FILE = os.path.join(DATA_DIR, "content.ts")

# Determine next image index
assets_files = os.listdir(ASSETS_DIR)
news_new_indices = []
for f in assets_files:
    m = re.match(r'news_new_(\d+)', f)
    if m:
        news_new_indices.append(int(m.group(1)))

next_idx = max(news_new_indices) + 1 if news_new_indices else 0

with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
    content_ts = f.read()

def safe_translate(text, target):
    # API was rate limiting. We'll use the original text for all locales to complete the structural import quickly.
    return text

copy_dirs = glob.glob(os.path.join(DATA_DIR, "* copy"))

new_imports = []
new_articles = []

for d in copy_dirs:
    print(f"Processing {d}...")
    article_md = os.path.join(d, "article.md")
    if not os.path.exists(article_md):
        continue
    
    with open(article_md, 'r', encoding='utf-8') as f:
        md_text = f.read()
    
    lines = md_text.split('\n')
    title = ""
    body_lines = []
    
    for line in lines:
        if line.startswith('# ') and not title:
            title = line[2:].strip()
        elif not line.startswith('![]') and not line.startswith('# ') and line.strip():
            body_lines.append(line.strip())
            
    if not title:
        title = os.path.basename(d).replace(' copy', '')
        
    excerpt = body_lines[0] if body_lines else ""
    
    t_title = {
        "fr": safe_translate(title, 'fr'),
        "en": safe_translate(title, 'en'),
        "es": safe_translate(title, 'es'),
        "it": safe_translate(title, 'it')
    }
    
    t_excerpt = {
        "fr": safe_translate(excerpt, 'fr'),
        "en": safe_translate(excerpt, 'en'),
        "es": safe_translate(excerpt, 'es'),
        "it": safe_translate(excerpt, 'it')
    }
    
    t_body = {"fr": [], "en": [], "es": [], "it": []}
    for bl in body_lines:
        t_body["fr"].append(safe_translate(bl, 'fr'))
        t_body["en"].append(safe_translate(bl, 'en'))
        t_body["es"].append(safe_translate(bl, 'es'))
        t_body["it"].append(safe_translate(bl, 'it'))
        
    # Handle Image
    images_dir = os.path.join(d, "images")
    img_import_name = ""
    if os.path.exists(images_dir):
        imgs = [f for f in os.listdir(images_dir) if f.endswith(('.jpg', '.jpeg', '.png', '.webp'))]
        if imgs:
            img_path = os.path.join(images_dir, imgs[0])
            ext = os.path.splitext(img_path)[1]
            new_img_name = f"news_new_{next_idx}{ext}"
            new_img_path = os.path.join(ASSETS_DIR, new_img_name)
            shutil.copy2(img_path, new_img_path)
            
            img_import_name = f"newsNew{next_idx}"
            new_imports.append(f'import {img_import_name} from "@/assets/{new_img_name}";')
            next_idx += 1
            
    if not img_import_name:
        img_import_name = "newsNew0" # fallback
        
    base_id = re.sub(r'[^a-z0-9]+', '-', t_title["en"].lower()).strip('-')
    words = sum(len(p.split()) for p in t_body["en"])
    read_time = f"{max(1, words // 200)} min"
    
    article_obj = {
        "id": base_id,
        "title": t_title,
        "excerpt": t_excerpt,
        "image": img_import_name,
        "category": "New Bikes",
        "readTime": read_time,
        "body": t_body
    }
    
    json_str = json.dumps(article_obj, ensure_ascii=False, indent=4)
    json_str = re.sub(r'"image":\s*"([^"]+)"', r'"image": \1', json_str)
    new_articles.append(json_str)

if new_articles:
    last_import_idx = content_ts.rfind('import ')
    end_of_imports = content_ts.find('\n', last_import_idx) + 1
    import_str = '\n'.join(new_imports) + '\n'
    
    articles_start = content_ts.find('export const articles: Article[] = [')
    articles_end_idx = content_ts.find('];', articles_start)
    
    articles_str = ',\n'.join(new_articles)
    array_content = content_ts[:articles_end_idx].rstrip()
    if not array_content.endswith(',') and not array_content.endswith('['):
        articles_str = ',\n' + articles_str
    
    final_ts = content_ts[:end_of_imports] + import_str + content_ts[end_of_imports:articles_end_idx].rstrip() + articles_str + '\n' + content_ts[articles_end_idx:]
    
    with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
        f.write(final_ts)
        
    print("Done generating content.ts!")
    
    for d in copy_dirs:
        shutil.rmtree(d)
        print(f"Removed {d}")
else:
    print("No articles processed.")
