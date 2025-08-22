'use client';

import { useEffect, useRef } from 'react';
import { Artwork } from '@/data/artworks';
import { isGif } from '@/utils/imageUtils';

interface LightboxProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ artwork, isOpen, onClose }: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !artwork) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = artwork.src;
    link.download = `${artwork.title}-${artwork.year}.${artwork.src.split('.').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-border rounded-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container - Flexible sizing */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 min-h-0">
          {isGif(artwork.src) ? (
            // For GIFs, use plain img tag to preserve animation
            <img
              src={artwork.src}
              alt={artwork.title}
              className="max-w-full max-h-full w-auto h-auto object-contain pixelated"
              style={{
                imageRendering: 'pixelated',
              }}
            />
          ) : (
            // For non-GIFs, use plain img tag for consistency
            <img
              src={artwork.src}
              alt={artwork.title}
              className="max-w-full max-h-full w-auto h-auto object-contain pixelated"
              style={{
                imageRendering: 'pixelated',
              }}
            />
          )}
        </div>

        {/* Footer Info */}
        <div className="p-6 bg-surface/80 backdrop-blur-sm border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h2 id="lightbox-title" className="text-2xl font-bold text-white mb-2">
                {artwork.title}
              </h2>
              <p className="text-neutral-300 mb-3">{artwork.year}</p>
              <div className="flex flex-wrap gap-2">
                {artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-600/20 text-emerald-400 text-sm rounded-full border border-emerald-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
