import os

DATA_DIR = r"c:\Users\HUAWEI\Desktop\dd\ride-bright-news\src\data"
CONTENT_FILE = os.path.join(DATA_DIR, "content.ts")

with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = 'export const articles: Article[] = ['
start_idx = content.find(start_marker)
if start_idx == -1:
    print("Could not find articles array")
    exit(1)

array_start = start_idx + len(start_marker)
end_idx = content.find('];\n\nexport type Video', array_start)
if end_idx == -1:
    end_idx = content.find('];', array_start)

array_content = content[array_start:end_idx].strip()

# We need to split the array into individual objects.
# We will do this by balancing braces { and }
objects = []
current_obj = []
brace_count = 0
in_string = False
escape = False

for char in array_content:
    current_obj.append(char)
    if char == '"' and not escape:
        in_string = not in_string
    if not in_string:
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                # End of object
                objects.append("".join(current_obj))
                current_obj = []
    
    escape = (char == '\\' and not escape)

# There will be commas and whitespace left in current_obj which we can ignore
# The objects list now contains all the article objects.
if len(objects) >= 13:
    last_13 = objects[-13:]
    rest = objects[:-13]
    
    new_objects = last_13 + rest
    
    new_array_content = ',\n'.join(new_objects) + '\n'
    
    final_content = content[:array_start] + '\n' + new_array_content + content[end_idx:]
    
    with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print(f"Successfully moved 13 articles to the top. Total articles: {len(objects)}")
else:
    print(f"Not enough articles found: {len(objects)}")

