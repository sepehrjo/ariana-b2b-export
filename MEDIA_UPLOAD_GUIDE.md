# Media Upload Guide

This guide tells you exactly where to drag and drop your images and videos in this repository on GitHub.

## File Structure

The project uses the following directory structure for media files:

```
public/
├── images/              ← DROP PRODUCT IMAGES HERE
│   ├── saffron.jpg
│   ├── date.jpg
│   ├── dried-fruits.jpg
│   ├── herbs.jpg
│   ├── spice.jpg
│   └── tea.jpg
├── videos/              ← DROP HERO VIDEO HERE
│   └── hero-video.mp4
└── screenshots/         ← DROP PREVIEW IMAGES HERE
    ├── preview-en.png
    └── preview-fa.png
```

## Where to Upload Files on GitHub

You can drag and drop files directly on GitHub's web interface:

1. Go to your repository: https://github.com/sepehrjo/ariana-b2b-export

2. For **Product Images** (`.jpg` files):
   - Navigate to `public/images/` folder
   - Click "Add file" → "Upload files"
   - Or drag and drop files directly
   - Upload these product images:
     * `saffron.jpg` (2023 x 1519 pixels or similar)
     * `date.jpg`
     * `dried-fruits.jpg`
     * `herbs.jpg`
     * `spice.jpg`
     * `tea.jpg`

3. For **Hero Video** (`.mp4` file):
   - Navigate to `public/videos/` folder
   - Click "Add file" → "Upload files"
   - Upload: `hero-video.mp4`

4. For **Preview Screenshots** (`.png` files):
   - Navigate to `public/screenshots/` folder
   - Upload these preview images:
     * `preview-en.png` (English version)
     * `preview-fa.png` (Persian/Farsi version)

## File Specifications

### Product Images (JPG)
- **Location**: `public/images/`
- **Format**: JPG/JPEG
- **Recommended Size**: 1200x800 pixels or 1600x1000 pixels
- **Max File Size**: 2-5 MB per image
- **Files Needed**:
  - saffron.jpg
  - date.jpg
  - dried-fruits.jpg
  - herbs.jpg
  - spice.jpg
  - tea.jpg

### Hero Video (MP4)
- **Location**: `public/videos/`
- **Format**: MP4
- **Recommended Size**: 1920x1080 pixels (Full HD)
- **Max File Size**: 10-50 MB
- **Duration**: 5-30 seconds recommended
- **File Name**: `hero-video.mp4`

### Preview Screenshots (PNG)
- **Location**: `public/screenshots/`
- **Format**: PNG
- **Recommended Size**: 1280x720 pixels
- **Max File Size**: 2-5 MB per image
- **Files Needed**:
  - preview-en.png (English version)
  - preview-fa.png (Persian version)

## How the Files are Used in the Code

### Product Images
- Used in `/components/product-grid.tsx` to display product thumbnails
- Used in `/components/product-detail.tsx` for full product pages
- Example: `<Image src="/images/saffron.jpg" alt="..." />`

### Hero Video
- Used in `/components/hero.tsx` for the landing page video background
- Example: `<video src="/public/videos/hero-video.mp4" />`

### Preview Screenshots
- Used in `README.md` to show website previews
- Displayed on GitHub repository homepage

## Step-by-Step Instructions for GitHub Web Upload

1. Open your repository: https://github.com/sepehrjo/ariana-b2b-export

2. Navigate to the folder where you want to upload (e.g., `public/images/`)

3. Click the "Add file" button (top right of the file list)

4. Select "Upload files"

5. Drag and drop your files or click "choose your files"

6. Add a commit message (e.g., "Add product images")

7. Click "Commit changes"

## Alternative: Upload Locally and Push

If you prefer to manage files locally first:

1. Create the directories locally:
   ```bash
   mkdir -p public/images
   mkdir -p public/videos
   mkdir -p public/screenshots
   ```

2. Copy your files into these directories:
   ```bash
   cp /path/to/saffron.jpg public/images/
   cp /path/to/hero-video.mp4 public/videos/
   cp /path/to/preview-en.png public/screenshots/
   ```

3. Commit the files:
   ```bash
   git add public/
   git commit -m "Add media assets - images and videos"
   ```

4. Push to GitHub:
   ```bash
   git push origin main
   ```

## Important File Names

Make sure your files have these **exact** names:

**Product Images:**
- saffron.jpg
- date.jpg
- dried-fruits.jpg
- herbs.jpg
- spice.jpg
- tea.jpg

**Hero Video:**
- hero-video.mp4

**Preview Screenshots:**
- preview-en.png
- preview-fa.png

## Troubleshooting

**Issue**: Files are not showing up on the website
- Check that files are in the correct folder (`public/images/`, `public/videos/`, or `public/screenshots/`)
- Check that file names match exactly (case-sensitive on some systems)
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

**Issue**: Images appear broken on the website
- Verify file paths are correct: `/images/filename.jpg`
- Check that image format is supported (JPG, PNG, WebP)
- Ensure image file is not corrupted

**Issue**: Cannot upload files via GitHub web interface
- Files might be too large (max 100 MB per file on GitHub)
- Try uploading via git command line instead
- Check your internet connection

## Next Steps

1. Prepare your media files (images and video)
2. Upload them to the correct folders on GitHub
3. The website will automatically use these files
4. No code changes needed - the files are already referenced in the design

---

**Created**: May 19, 2026
**For**: Ariana B2B Export Platform
