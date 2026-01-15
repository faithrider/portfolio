import os
from PIL import Image, ImageOps

# Set these paths relative to the project root
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INPUT_DIR = os.path.join(PROJECT_ROOT, 'static')
OUTPUT_DIR = os.path.join(PROJECT_ROOT, 'static', 'thumbnails')
THUMB_WIDTH = 700  # Width of thumbnail in pixels (keeps aspect ratio)

os.makedirs(OUTPUT_DIR, exist_ok=True)

for filename in os.listdir(INPUT_DIR):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        in_path = os.path.join(INPUT_DIR, filename)
        out_name = os.path.splitext(filename)[0] + '-thumb.jpg'
        out_path = os.path.join(OUTPUT_DIR, out_name)
        if os.path.exists(out_path):
            print(f'Thumbnail already exists: {out_path}')
            continue
        try:
            with Image.open(in_path) as img:
                img = ImageOps.exif_transpose(img)
                aspect = img.height / img.width
                new_height = int(THUMB_WIDTH * aspect)
                img_thumb = img.resize((THUMB_WIDTH, new_height), Image.LANCZOS)
                img_thumb = img_thumb.convert('RGB')
                img_thumb.save(out_path, 'JPEG', quality=92, optimize=True)
                print(f'Thumbnail saved: {out_path}')
        except Exception as e:
            print(f'Error processing {filename}: {e}')
