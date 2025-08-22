# Artworks Directory

Place your PNG artwork files in this directory.

## File Requirements

- **Format**: PNG (recommended for pixel art)
- **Naming**: Use lowercase with hyphens (e.g., `sword-and-slime.png`)
- **Size**: Include the original pixel dimensions in `data/artworks.ts`

## Example Structure

```
public/artworks/
├── sword-and-slime.png      # 64x64 pixels
├── tiny-town.png            # 256x128 pixels
├── pixel-knight.png         # 32x32 pixels
└── forest-tiles.png         # 128x128 pixels
```

## Adding New Artwork

1. **Place the PNG file** in this directory
2. **Update `data/artworks.ts`** with:
   - `slug`: filename without extension
   - `title`: display name
   - `year`: creation year
   - `tags`: array of categories
   - `src`: path starting with `/artworks/`
   - `width` & `height`: original pixel dimensions

## Tips

- Keep original pixel dimensions for crisp display
- Use descriptive filenames
- Organize tags consistently across artworks
- Optimize PNG files for web (reasonable file sizes)
