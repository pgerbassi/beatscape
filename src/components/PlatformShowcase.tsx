
import { useState } from 'react';
import { Zap, Sparkles } from 'lucide-react';

const PlatformShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative py-24 bg-gradient-to-tr from-cyan-950 via-black to-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,243,255,0.1)_0%,transparent_40%,transparent_60%,rgba(255,215,0,0.1)_100%)]" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,243,255,0.2) 0%, transparent 50%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-electric-gold">
              Preview Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch how our drum kit improve your musics.
          </p>
        </div>

        {/* YouTube Video Container */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden 
                      shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]
                      transition-shadow duration-300">
          <div className="relative pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/9UQquUYEy1c"
              className="absolute inset-0 w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="https://pay.hotmart.com/G98866701M?bid=1744038366135" target="_blank" rel="noopener noreferrer">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                     from-electric-blue to-electric-gold rounded-full text-black font-bold text-lg
                     transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Now
              <Zap className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`} />
            </span>
            <Sparkles 
              className={`absolute right-4 opacity-0 transition-all duration-300 
                         ${isHovered ? 'opacity-100 translate-x-2' : ''}`}
            />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlatformShowcase;
