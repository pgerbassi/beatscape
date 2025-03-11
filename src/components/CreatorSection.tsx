import React from 'react';
import { Music4, Wand2 } from 'lucide-react';

const CreatorSection = () => {
  return (
    <section className="max-h-screen lg:min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex lg:items-center lg:justify-between lg:content-center lg:object-center lg:align-center items-start gap-8">
          {/* Content Section */}
          <div className="lg:w-5/5 space-y-6 pt-8">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-500/20">
              <span className="text-cyan-400 font-medium">Meet the Creator</span>
            </div>

            <div className="flex items-center gap-6">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                ProD. Pip
              </h2>
              
              {/* Circular Profile Image */}
              <div className="relative lg:absolute lg:opacity-60 lg:right-[10%] lg:top-[100%] lg:content-center lg:align-center lg:justify-center lg:items-center lg:justify-items-center group animate-float">
                <div className="w-20 h-20 rounded-full lg:w-[25vw] lg:h-[25vh] overflow-hidden ring-2 ring-cyan-500/20 transition-all duration-500 group-hover:ring-4 group-hover:ring-cyan-500/40">
                  <img 
                    src="/lovable-uploads/macaco produtor.jpg" 
                    alt="Music Producer at Work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Animated glow effect */}
                <div className="absolute -inset-0.5 z-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin-slow"></div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              With a decade of experience in musical production, Pip has been pushing the boundaries of sound design and audio innovation. At 27, he's already established himself as a pioneering force in the next generation of audio technology.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Music4 className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">Experience</span>
                </div>
                <p className="text-3xl font-bold text-white">10+ Years</p>
                <p className="text-gray-400">Musical Production</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Wand2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Projects</span>
                </div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-gray-400">Completed Works</p>
              </div>
            </div>

            <div className="flex gap-4">
            <a href="https://bsta.rs/fp9qxP" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Buy Now!
              </button>
              </a>
              <a href="https://www.instagram.com/theprodpip/" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/15 transition-colors">
              Connect with Pip
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;