import os
from PIL import Image, ImageOps

# Set these paths relative to the project root
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTO_DIR = os.path.join(PROJECT_ROOT, 'static', 'photography')
OUTPUT_DIR = os.path.join(PROJECT_ROOT, 'static', 'thumbnails')
THUMB_WIDTH = 700  # Width of thumbnail in pixels (keeps aspect ratio)

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Recursively find all images in photography folder and subfolders
for root, dirs, files in os.walk(PHOTO_DIR):
    for filename in files:
        if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            in_path = os.path.join(root, filename)
            out_name = os.path.splitext(filename)[0] + '-thumb.jpg'
            out_path = os.path.join(OUTPUT_DIR, out_name)

            if os.path.exists(out_path):
                print(f'Thumbnail already exists: {out_name}')
                continue

            try:
                with Image.open(in_path) as img:
                    img = ImageOps.exif_transpose(img)
                    aspect = img.height / img.width
                    new_height = int(THUMB_WIDTH * aspect)
                    img_thumb = img.resize((THUMB_WIDTH, new_height), Image.LANCZOS)
                    img_thumb = img_thumb.convert('RGB')
                    img_thumb.save(out_path, 'JPEG', quality=92, optimize=True)
                    print(f'Thumbnail saved: {out_name}')
            except Exception as e:
                print(f'Error processing {filename}: {e}')
