# Pixel Art Portfolio - GENOMA

A minimal but polished pixel art portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a responsive gallery, tag filtering, and a beautiful lightbox modal.

## Features

- 🎨 **Pixel-Perfect Rendering** - Crisp, non-blurry pixel art display
- 🏷️ **Tag Filtering** - Filter artworks by category (sprites, tilesets, characters, etc.)
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔍 **Lightbox Modal** - Click any artwork to view it large with download option
- 🌙 **Dark Theme** - Beautiful dark aesthetic with subtle shadows
- ♿ **Accessible** - Full keyboard navigation and screen reader support
- ⚡ **Fast** - Built with Next.js App Router for optimal performance

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Your Artwork

### 1. Place Images
Drop your PNG artwork files in the `public/artworks/` directory.

### 2. Update Data
Edit `data/artworks.ts` to add your artwork entries:

```typescript
export const artworks: Artwork[] = [
  {
    slug: "your-artwork-name",
    title: "Your Artwork Title",
    year: 2024,
    tags: ["sprites", "fantasy"],
    src: "/artworks/your-artwork-name.png",
    width: 64,  // Original pixel width
    height: 64  // Original pixel height
  },
  // ... more artworks
];
```

### 3. Customize Content
Update the following in `app/page.tsx`:
- Artist name: Replace `[NOMBRE DEL ARTISTA]`
- Social links: Update Instagram, GitHub, and email URLs
- About section: Modify bio and tools

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ArtworkCard.tsx      # Individual artwork display
│   ├── Lightbox.tsx         # Modal for large image view
│   ├── PixelImage.tsx       # Pixel-perfect image wrapper
│   └── TagFilters.tsx       # Tag filtering buttons
├── data/
│   └── artworks.ts          # Artwork data and types
├── public/
│   └── artworks/            # Place your PNG files here
└── package.json
```

## Pixel-Perfect Rendering

The portfolio ensures crisp pixel art display through:

- `next.config.js` with `images.unoptimized = true`
- CSS rules for pixelated rendering across browsers
- Fixed integer scaling (4x multiplier) to prevent blur
- Proper width/height attributes to avoid layout shifts

## Customization

### Colors
Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  background: '#0a0a0a',    // Main background
  surface: '#171717',        // Card backgrounds
  border: 'rgba(255, 255, 255, 0.1)', // Borders
}
```

### Typography
The portfolio uses Inter font by default. Change in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### Layout
Adjust grid columns in `app/page.tsx`:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Docker
Build and run with Docker:

```bash
# Build the image
docker build -t pixel-art-portfolio .

# Run the container
docker run -p 3000:3000 pixel-art-portfolio
```

### Manual Deployment
```bash
npm run build
npm start
```

## Performance

- **Lighthouse Score**: Optimized for 90+ performance
- **Bundle Size**: Minimal dependencies, tree-shaken
- **Images**: Unoptimized for pixel-perfect quality
- **SEO**: Full metadata and Open Graph tags

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Supabase integration for dynamic content
- [ ] Admin panel for artwork management
- [ ] Search functionality
- [ ] Artwork categories and collections
- [ ] Commission request forms
- [ ] Analytics and visitor tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have questions or need help customizing:
- Open an issue on GitHub
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
