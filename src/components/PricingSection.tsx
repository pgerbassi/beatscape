import React from 'react';
import { Sparkles, Check, Zap } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[128px] -top-48 -left-24 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[128px] -bottom-32 -right-24 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Sound
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock the future of audio production with our cutting-edge technology
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="relative group">
            {/* Neon border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative px-8 py-10 bg-gray-900 rounded-xl leading-none flex flex-col items-center">
              {/* Card Header */}
              <div className="absolute -top-5">
                <div className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/20">
                  Promo
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 mb-8 text-center">
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl mt-2">$</span>
                  <span className="text-6xl font-bold">17,90</span>
                  <span className="text-2xl mt-2"></span>
                </div>
                <p className="text-gray-400 mt-2">One time payment</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500/10 group-hover/item:bg-cyan-500/20 transition-colors">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="group-hover/item:text-cyan-400 transition-colors">More than 700 Brazilian funk timbres</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500/10 group-hover/item:bg-cyan-500/20 transition-colors">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="group-hover/item:text-cyan-400 transition-colors">Advanced Sound Effects</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500/10 group-hover/item:bg-cyan-500/20 transition-colors">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="group-hover/item:text-cyan-400 transition-colors">Safe Purchase</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500/10 group-hover/item:bg-cyan-500/20 transition-colors">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="group-hover/item:text-cyan-400 transition-colors">Free Licenses</span>
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://pay.hotmart.com/G98866701M?bid=1744038366135" target="_blank" rel="noopener noreferrer">
              <button className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Buy Now</span>
                </div>
              </button>
              </a>

              {/* Money-back guarantee */}
              <p className="text-gray-400 text-sm mt-6">
                7-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
