
import { Play, Pause } from 'lucide-react';
import { Beat } from '../types/beat';
import { Waveform } from './Waveform';

interface BeatCardProps {
  beat: Beat;
  isActive: boolean;
  isFocused: boolean;
  onPlayPause: (id: number) => void;
}

export const BeatCard = ({ beat, isActive, isFocused, onPlayPause }: BeatCardProps) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-hero-light to-hero-dark p-6 rounded-xl border transition-all duration-300 ${
        isFocused 
          ? 'border-electric-blue shadow-lg shadow-electric-blue/20' 
          : 'border-electric-blue/20'
      }`}
    >
      <div className="absolute inset-0 bg-electric-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex items-center space-x-6">
        <Waveform isActive={isActive} />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{beat.name}</h3>
          <p className="text-gray-400 text-sm">{beat.genre} • {beat.bpm} BPM</p>
        </div>
        
        <button
          onClick={() => onPlayPause(beat.id)}
          className={`inline-flex items-center z-50 justify-center w-12 h-12 rounded-full transition-colors shrink-0 ${
            isFocused 
              ? 'bg-electric-blue hover:bg-electric-blue/80' 
              : 'bg-electric-blue/20 hover:bg-electric-blue/30'
          }`}
        >
          {isActive ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};
