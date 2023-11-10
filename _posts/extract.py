import markdown_it
import os
import frontmatter
import json
import re

# Replace with the actual path to your Markdown files
markdown_root = './'
posts_en = []
posts_pt = []

# Function to read a Markdown file and convert it to HTML
def markdown_to_html(markdown_text):
    md = markdown_it.MarkdownIt()
    html_text = md.render(markdown_text)
    return html_text

def get_date(post):
    return post.get("date", "")

for root, _, files in os.walk(markdown_root):
    for filename in files:
        if filename.endswith(".md"):
            file_path = os.path.join(root, filename)
            with open(file_path, 'r', encoding='utf-8') as file:
                match = re.search(r'\d{4}-\d{2}-\d{2}-(.*?)(?:\.md)?$', filename)
                cleaned_filename = match.group(1)
                post = frontmatter.load(file)
                post_content = markdown_to_html(post.content)
                post_metadata = {
                    "url": cleaned_filename,
                    "title": post.get("title", ""),  # Check if 'title' exists in frontmatter
                    "description": post.get("description", ""),
                    "image": post.get("image", ""),
                    "date": post.get("date", ""),
                    "tags": post.get("tags", []),
                    "author": post.get("author", ""),
                    "lang": post.get("lang", "")
                }
                if post_metadata["lang"] == "en":
                    posts_en.append({"content": post_content, "metadata": post_metadata})
                elif post_metadata["lang"] == "pt":
                    posts_pt.append({"content": post_content, "metadata": post_metadata})

# Sort English posts by date in reverse order
sorted_posts_en = sorted(posts_en, key=lambda x: get_date(x["metadata"]), reverse=True)

# Sort Portuguese posts by date in reverse order
sorted_posts_pt = sorted(posts_pt, key=lambda x: get_date(x["metadata"]), reverse=True)

# Merge English and Portuguese posts into a single JSON file
merged_posts = sorted_posts_en + sorted_posts_pt
with open("../public/posts.json", 'w', encoding='utf-8') as json_file:
    json.dump(merged_posts, json_file, ensure_ascii=False, indent=4)

# Store English posts in a separate JSON file
with open("../public/posts_en.json", 'w', encoding='utf-8') as json_file:
    json.dump(sorted_posts_en, json_file, ensure_ascii=False, indent=4)

# Store Portuguese posts in a separate JSON file
with open("../public/posts_pt.json", 'w', encoding='utf-8') as json_file:
    json.dump(sorted_posts_pt, json_file, ensure_ascii=False, indent=4)
