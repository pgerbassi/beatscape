
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-hero-dark overflow-hidden font-space">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Rotating Gradient Orb */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-rotate-slow opacity-30">
          <div className="absolute w-full h-full bg-gradient-to-br from-electric-blue via-transparent to-electric-gold rounded-full blur-3xl" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
              }}
            >
              <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-xl animate-pulse-glow" 
                   style={{ animationDelay: `${i * 0.5}s` }} />
            </div>
          ))}
        </div>

        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,transparent_70%)] animate-pulse-slow" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-dark/80 via-hero-dark/40 to-hero-dark/90" />

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <div className={`transform ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                 style={{ animationDelay: '0.2s' }}>
              <span className="inline-block px-4 py-1 rounded-full bg-electric-blue/10 backdrop-blur-sm border border-electric-blue/20 text-electric-blue text-sm font-medium mb-4">
                Next Generation Audio
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold leading-tight transform ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}>
              Experience the Future 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-electric-gold ml-2">
                of Sound
              </span>
            </h1>

            <p className={`text-gray-400 text-lg md:text-xl max-w-xl transform ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
               style={{ animationDelay: '0.6s' }}>
              Dive into a new dimension of audio with our revolutionary soundwave technology. Transform your music into an immersive experience.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 transform ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                 style={{ animationDelay: '0.8s' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-gold rounded-lg text-black font-bold hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="px-8 py-4 border border-electric-blue/30 rounded-lg text-white backdrop-blur-sm hover:bg-electric-blue/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className={`relative transform ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                 style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-hero-dark via-transparent to-transparent z-10" />
              <img
                src="/lovable-uploads/a7b12d3a-563a-4982-91e4-6c653834b8f9.png"
                alt="Futuristic DJ Monkey"
                className="rounded-2xl w-full h-auto animate-pulse-slow"
              />
              
              {/* Animated Sound Waves */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-12 bg-electric-blue/60 rounded-full animate-wave"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: `${Math.sin((i + 1) * 0.4) * 24 + 24}px`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
