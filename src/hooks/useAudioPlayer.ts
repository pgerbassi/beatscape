import { useState, useRef, useEffect } from 'react';
import { Beat } from '../types/beat';

export const useAudioPlayer = (beats: Beat[]) => {
  const [activePreview, setActivePreview] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  useEffect(() => {
    console.log('Initializing audio elements for beats:', beats);

    beats.forEach(beat => {
      if (!audioRefs.current[beat.id]) {
        try {
          console.log(`Creating audio element for beat: ${beat.name}, URL: ${beat.audioUrl}`);
          
          const audio = new Audio(beat.audioUrl);
          audio.preload = "auto";
          
          // Detailed error logging
          audio.addEventListener('error', (e) => {
            console.error(`Audio Error for beat ${beat.id} (${beat.name}):`, {
              error: e,
              src: audio.src,
              networkState: audio.networkState,
              readyState: audio.readyState
            });
          });

          // Log when audio is successfully loaded
          audio.addEventListener('canplaythrough', () => {
            console.log(`Audio loaded successfully for beat ${beat.id} (${beat.name})`);
          });

          audioRefs.current[beat.id] = audio;
        } catch (error) {
          console.error(`Critical error creating audio element for beat ${beat.id} (${beat.name}):`, error);
        }
      }
    });

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, [beats]);

  const handlePlayPause = (beatId: number) => {
    console.log(`Attempting to play/pause beat ID: ${beatId}`);
    
    const audio = audioRefs.current[beatId];
    
    if (!audio) {
      console.error(`No audio found for beat ID: ${beatId}`);
      return;
    }

    try {
      // Log current audio state
      console.log(`Audio state for beat ${beatId}:`, {
        src: audio.src,
        paused: audio.paused,
        currentTime: audio.currentTime,
        duration: audio.duration,
        networkState: audio.networkState,
        readyState: audio.readyState
      });

      // Pause all other audio
      Object.entries(audioRefs.current).forEach(([id, otherAudio]) => {
        if (Number(id) !== beatId) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
          if (Number(id) === activePreview) {
            setActivePreview(null);
          }
        }
      });

      if (activePreview === beatId) {
        audio.pause();
        audio.currentTime = 0;
        setActivePreview(null);
        console.log(`Paused beat ${beatId}`);
      } else {
        const playPromise = audio.play();
        
        playPromise.then(() => {
          console.log(`Successfully started playing beat ${beatId}`);
          setActivePreview(beatId);
        }).catch(error => {
          console.error(`Detailed play error for beat ${beatId}:`, {
            error,
            audioSrc: audio.src,
            networkState: audio.networkState,
            readyState: audio.readyState
          });
          setActivePreview(null);
        });
      }
    } catch (error) {
      console.error(`Unexpected error in handlePlayPause for beat ${beatId}:`, error);
      setActivePreview(null);
    }
  };

  return { activePreview, handlePlayPause };
};
