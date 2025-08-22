'use client';

import { Artwork } from '@/data/artworks';
import { isGif } from '@/utils/imageUtils';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  return (
    <div 
      className="bg-surface/50 border border-border rounded-xl overflow-hidden hover:bg-surface/70 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
      onClick={onClick}
    >
      {/* Fixed Aspect Ratio Image Container */}
      <div className="aspect-[4/3] bg-neutral-900/50 flex items-center justify-center overflow-hidden relative">
        {isGif(artwork.src) ? (
          <img
            src={artwork.src}
            alt={artwork.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain pixelated group-hover:scale-110 transition-transform duration-300"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        ) : (
          <img
            src={artwork.src}
            alt={artwork.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain pixelated group-hover:scale-110 transition-transform duration-300"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-1">
          {artwork.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-3">{artwork.year}</p>
        <div className="flex flex-wrap gap-2">
          {artwork.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-neutral-800/50 border border-border rounded text-xs text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
