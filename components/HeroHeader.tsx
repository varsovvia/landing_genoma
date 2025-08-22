'use client';

export default function HeroHeader() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        
        {/* Subtle Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_70%)]" />
        
        {/* Gentle Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)`,
              backgroundSize: '120px 120px',
              animation: 'gridMove 40s linear infinite'
            }} />
          </div>
          
          {/* Few Floating Squares */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-emerald-500/8 border border-emerald-400/15"
              style={{
                left: `${Math.floor(Math.random() * 8) * 12.5}%`,
                top: `${Math.floor(Math.random() * 8) * 12.5}%`,
                width: `${Math.floor(Math.random() * 2 + 2) * 20}px`,
                height: `${Math.floor(Math.random() * 2 + 2) * 20}px`,
                animation: `pixelFloat${Math.floor(Math.random() * 2) + 1} ${20 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                imageRendering: 'pixelated'
              }}
            />
          ))}
          
          {/* Subtle Pixel Dots */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute bg-emerald-400/20"
              style={{
                left: `${Math.floor(Math.random() * 16) * 6.25}%`,
                top: `${Math.floor(Math.random() * 16) * 6.25}%`,
                width: '2px',
                height: '2px',
                animation: `pixelPulse ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
                imageRendering: 'pixelated'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main Content - Centered */}
      <div className="relative z-10 text-center px-4">
        {/* Main Title - Much Bigger */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-300 mb-8 animate-pulse">
          GENOMA
        </h1>
        
        {/* Subtitle - Bigger and Cleaner */}
        <p className="text-4xl md:text-5xl lg:text-6xl text-neutral-200 font-light mb-12 animate-fade-in-up">
          PIXEL ARTIST
        </p>
        
        {/* Simple Tagline */}
        <p className="text-xl md:text-2xl text-neutral-400 font-mono tracking-wider max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Crafting pixel-perfect worlds for games & retro aesthetics
        </p>
        
        {/* Contact Link - Simple and Direct */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="mailto:genoma@example.com?subject=Commission%20Inquiry"
            className="inline-block px-12 py-6 bg-emerald-600/20 border-2 border-emerald-500/40 text-emerald-300 text-xl font-semibold rounded-2xl hover:bg-emerald-600/30 hover:border-emerald-400/60 hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-emerald-400/60 text-sm font-mono tracking-wider">
            SCROLL
          </span>
          <div className="w-6 h-10 border-2 border-emerald-400/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Smooth Transition Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(120px, 120px); }
        }
        
        @keyframes pixelFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-6px) rotate(45deg); opacity: 1; }
        }
        
        @keyframes pixelFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-8px) rotate(-45deg); opacity: 1; }
        }
        
        @keyframes pixelPulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
