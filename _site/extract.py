import json
from pathlib import Path
import yaml
import re
from datetime import datetime
from langdetect import detect
import os

# Function to create a valid slug for the filename
def slugify(value):
    value = re.sub(r'[^\w\s-]', '', value)
    value = re.sub(r'[\s-]+', '-', value).strip().lower()
    return value

# Function to format the date in the required format for filenames
def format_date(date_string):
    try:
        date_obj = datetime.strptime(date_string, '%Y-%m-%dT%H:%M:%S%z')
    except ValueError:
        date_obj = datetime(1970, 1, 1)
    return date_obj.strftime('%Y-%m-%d')

# Function to detect the language of the content
def detect_language(text):
    try:
        return detect(text)
    except:
        return 'unknown'

# Create directories for English and Portuguese posts
posts_dir = Path('_posts')
en_posts_dir = posts_dir / 'en'
pt_posts_dir = posts_dir / 'pt'
en_posts_dir.mkdir(parents=True, exist_ok=True)
pt_posts_dir.mkdir(parents=True, exist_ok=True)

# Assuming your JSON files are in a directory called "json_posts"
json_dir = Path('json_posts')

for json_file in json_dir.glob('*.json'):
    with open(json_file, 'r', encoding='utf-8') as file:
        post = json.load(file)
        meta = post['meta_properties']
        content = post['post_content_markdown']

        # Detect the language of the content
        language = detect_language(content)

        # Define the target directory based on language
        if language == 'pt':
            target_dir = pt_posts_dir
        elif language == 'en':
            target_dir = en_posts_dir
        else:
            target_dir = posts_dir  # default directory for unidentified languages

        # Get the title and the published date, or provide defaults if missing
        title = meta.get('og:title', 'untitled-post')
        image = os.path.basename(meta.get('og:image', ''))
        description = meta.get('og:description', '').strip()
        published_date = meta.get('article:published_time', '1970-01-01T00:00:00-00:00')

        # Format the date for the filename
        formatted_date = format_date(published_date)

        # Create the front matter with a fallback for missing keys
        front_matter = {
            'layout': 'post',
            'title': title,
            'description': description,
            'image': image,
            'date': published_date,
            'tags': [meta.get('article:tag', 'untagged')],
            'author': 'Fellipe Brito',
            'lang': language
        }

        # Convert the front matter to YAML and prepend it to the content
        new_content = '---\n' + yaml.dump(front_matter, sort_keys=False, allow_unicode=True) + '---\n\n' + content

        # Sanitize the title to create a valid filename
        slugified_title = slugify(title)
        filename = f"{formatted_date}-{slugified_title}.md"
        md_file_path = target_dir / filename

        # Write to a new Markdown file in the Jekyll `_posts` directory
        with open(md_file_path, 'w', encoding='utf-8') as md_file:
            md_file.write(new_content)

print("All posts have been processed.")
