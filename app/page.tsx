'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { artworks, allTags } from '@/data/artworks';
import ArtworkCard from '@/components/ArtworkCard';
import TagFilters from '@/components/TagFilters';
import Lightbox from '@/components/Lightbox';
import HeroHeader from '@/components/HeroHeader';
import { Artwork } from '@/data/artworks';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero']));

  const filteredArtworks = useMemo(() => {
    if (!selectedTag) return artworks;
    return artworks.filter(artwork => artwork.tags.includes(selectedTag));
  }, [selectedTag]);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedArtwork(null);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background">
      {/* Hero Header */}
      <HeroHeader />

      {/* What I Do Section */}
      <section 
        data-section="what-i-do"
        className={`px-4 py-16 md:py-20 bg-surface/30 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('what-i-do') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What I Do
            </h2>
            <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto">
              I create pixel-perfect artwork that brings games and digital experiences to life with retro aesthetics and modern precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center p-6 bg-surface/50 border border-border rounded-xl hover-lift group transition-all duration-700 ${
              visibleSections.has('what-i-do') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-20 h-20 bg-emerald-600/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V2zm0 4a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm0 4a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">Game Assets</h3>
              <p className="text-neutral-300">
                Characters, enemies, items, and UI elements designed for pixel-perfect gameplay.
              </p>
            </div>
            
            <div className={`text-center p-6 bg-surface/50 border border-border rounded-xl hover-lift group transition-all duration-700 ${
              visibleSections.has('what-i-do') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="w-20 h-20 bg-emerald-600/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">Tilesets & Maps</h3>
              <p className="text-neutral-300">
                Complete environment tilesets and map designs for immersive game worlds.
              </p>
            </div>
            
            <div className={`text-center p-6 bg-surface/50 border border-border rounded-xl hover-lift group transition-all duration-700 ${
              visibleSections.has('what-i-do') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="w-20 h-20 bg-emerald-600/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">Animations</h3>
              <p className="text-neutral-300">
                Smooth, frame-by-frame animations that bring static sprites to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        data-section="gallery"
        className={`px-4 py-16 md:py-20 bg-surface/30 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('gallery') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gallery
            </h2>
            <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto">
              Explore my pixel art collection. Use the filters below to find specific styles or themes.
            </p>
          </div>

          {/* Filters Section */}
          <div className={`mb-12 transition-all duration-700 ${
            visibleSections.has('gallery') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="max-w-4xl mx-auto">
              <TagFilters
                tags={allTags}
                selectedTag={selectedTag}
                onTagSelect={setSelectedTag}
              />
            </div>
          </div>

          {/* Artworks Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 ${
            visibleSections.has('gallery') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '500ms' }}>
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.slug}
                className={`transition-all duration-700 ${
                  visibleSections.has('gallery') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <ArtworkCard
                  artwork={artwork}
                  onClick={() => handleArtworkClick(artwork)}
                />
              </div>
            ))}
            
            {filteredArtworks.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-400 text-lg">No artworks found for this tag.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        data-section="about"
        className={`px-4 py-16 md:py-20 bg-surface/50 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('about') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">About</h2>
          <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm GENOMA, specializing in creating crisp, pixel-perfect artwork for games and retro aesthetics. 
            Each piece is crafted with attention to detail and optimized for digital displays.
          </p>
          
          <div className={`mb-8 transition-all duration-700 ${
            visibleSections.has('about') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-white">Tools & Software</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-neutral-800 border border-border rounded-lg">Aseprite</span>
              <span className="px-4 py-2 bg-neutral-800 border border-border rounded-lg">Pro Motion NG</span>
              <span className="px-4 py-2 bg-neutral-800 border border-border rounded-lg">Photoshop</span>
            </div>
          </div>
          
          <div className={`bg-emerald-600/20 border border-emerald-500/30 rounded-xl p-6 transition-all duration-700 ${
            visibleSections.has('about') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '500ms' }}>
            <h3 className="text-xl font-semibold mb-2 text-white">Available for Commissions</h3>
            <p className="text-neutral-300 mb-4">
              I'm currently accepting pixel art commissions for games, websites, and personal projects.
            </p>
            <a
              href="mailto:genoma@example.com?subject=Commission%20Inquiry"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        data-section="contact"
        className={`px-4 py-16 md:py-20 bg-background relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('contact') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">Let's Work Together</h2>
          <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your pixel art vision to life? I'm here to help create something amazing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'instagram', title: 'Instagram', desc: 'Follow my latest work', href: 'https://instagram.com/genoma' },
              { icon: 'github', title: 'GitHub', desc: 'Check out my code', href: 'https://github.com/genoma' },
              { icon: 'email', title: 'Email', desc: 'Let\'s discuss your project', href: 'mailto:genoma@example.com' }
            ].map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-6 bg-surface/50 border border-border rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:scale-105 transition-all duration-700 ${
                  visibleSections.has('contact') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <svg className="w-12 h-12 text-emerald-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  {item.icon === 'instagram' && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  )}
                  {item.icon === 'github' && (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  )}
                  {item.icon === 'email' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  )}
                </svg>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-300 text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        artwork={selectedArtwork}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
      />
    </main>
  );
}
