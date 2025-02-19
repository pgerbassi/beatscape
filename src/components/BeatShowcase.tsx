
import { useState, useEffect } from 'react';
import { beats } from '../constants/beats';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { BeatCard } from './BeatCard';
import { BeatBenefits } from './BeatBenefits';
import { Beat } from '../types/beat';

const BeatShowcase = () => {
  const [visibleBeats, setVisibleBeats] = useState<Beat[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { activePreview, handlePlayPause } = useAudioPlayer(beats);

  const updateVisibleBeats = (centerIndex: number) => {
    const beatCount = beats.length;
    const prevIndex = (centerIndex - 1 + beatCount) % beatCount;
    const nextIndex = (centerIndex + 1) % beatCount;
    
    setVisibleBeats([
      beats[prevIndex],
      beats[centerIndex],
      beats[nextIndex]
    ]);
  };

  const handleScroll = (direction: 'up' | 'down') => {
    const newIndex = direction === 'up' 
      ? (currentIndex - 1 + beats.length) % beats.length
      : (currentIndex + 1) % beats.length;
    
    setCurrentIndex(newIndex);
    updateVisibleBeats(newIndex);
  };

  // Initialize visible beats using useEffect instead of useState
  useEffect(() => {
    updateVisibleBeats(currentIndex);
  }, []); // Run once on mount

  return (
    <div className="relative py-20 bg-hero-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,243,255,0.1)_0%,transparent_40%,transparent_60%,rgba(255,215,0,0.1)_100%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,243,255,0.1) 0%, transparent 50%)`,
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Beat Previews Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Featured <span className="text-electric-blue">Beats</span>
          </h2>
          
          <div className="relative h-[400px] flex flex-col items-center justify-center">
            <button 
              onClick={() => handleScroll('up')}
              className="absolute top-0 w-full h-16 bg-gradient-to-b from-hero-dark to-transparent z-10 cursor-pointer hover:from-electric-blue/10 transition-colors"
              aria-label="Scroll up"
            />
            
            <div className="relative w-full max-w-2xl h-[300px] overflow-visible">
              {visibleBeats.map((beat, index) => (
                <div
                  key={beat.id}
                  className={`absolute w-full transition-all duration-500 ease-out ${
                    index === 0 ? 'top-0 scale-95 opacity-50 -translate-y-8' :
                    index === 1 ? 'top-1/2 -translate-y-1/2 scale-100 z-20' :
                    'bottom-0 scale-95 opacity-50 translate-y-8'
                  }`}
                >
                  <BeatCard
                    beat={beat}
                    isActive={activePreview === beat.id}
                    isFocused={index === 1}
                    onPlayPause={handlePlayPause}
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={() => handleScroll('down')}
              className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-hero-dark to-transparent z-10 cursor-pointer hover:from-electric-blue/10 transition-colors"
              aria-label="Scroll down"
            />
          </div>
        </div>

        <BeatBenefits />
      </div>
    </div>
  );
};

export default BeatShowcase;
