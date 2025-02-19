
interface WaveformProps {
  isActive: boolean;
}

export const Waveform = ({ isActive }: WaveformProps) => {
  return (
    <div className="flex items-center h-16 flex-1">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-1 mx-0.5 bg-electric-blue/60 rounded-full animate-wave"
          style={{
            height: isActive ? `${Math.sin((i + 1) * 0.4) * 24 + 24}px` : '8px',
            animationDelay: `${i * 0.1}s`,
            opacity: isActive ? 1 : 0.3
          }}
        />
      ))}
    </div>
  );
};
