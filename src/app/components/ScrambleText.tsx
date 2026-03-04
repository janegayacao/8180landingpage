import { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay before animation starts
  duration?: number; // How long the scramble lasts
  speed?: number; // Frame update speed in ms (higher = slower)
  scrambleIntensity?: number; // 0-1, how much of the text scrambles at once
  scrambleColor?: string; // Color for scrambled characters
  onComplete?: () => void;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function ScrambleText({ 
  text, 
  className = '', 
  delay = 0,
  duration = 3000,
  speed = 50, // Update every 50ms instead of every frame
  scrambleIntensity = 0.1, // Only 10% of remaining text scrambles
  scrambleColor = '#00AAFF', // Default blue color for scrambled chars
  onComplete 
}: ScrambleTextProps) {
  const [displayChars, setDisplayChars] = useState<Array<{char: string, isScrambled: boolean}>>([]);
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  const scramble = () => {
    if (isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    const startTime = Date.now();
    const textLength = text.length;
    let lastUpdateTime = 0;

    // Start with all text scrambled
    let initialScrambled: Array<{char: string, isScrambled: boolean}> = [];
    for (let i = 0; i < textLength; i++) {
      if (text[i] === ' ' || text[i] === '\n') {
        initialScrambled.push({ char: text[i], isScrambled: false });
      } else {
        initialScrambled.push({ 
          char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)], 
          isScrambled: true 
        });
      }
    }
    setDisplayChars(initialScrambled);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Throttle updates based on speed parameter
      if (elapsed - lastUpdateTime < speed && progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateTime = elapsed;
      
      // Calculate how many characters should be "decoded"
      const decodedCount = Math.floor(progress * textLength);
      
      let newChars: Array<{char: string, isScrambled: boolean}> = [];
      for (let i = 0; i < textLength; i++) {
        if (text[i] === ' ' || text[i] === '\n') {
          // Preserve spaces and line breaks
          newChars.push({ char: text[i], isScrambled: false });
        } else if (i < decodedCount) {
          // Show the actual character (decoded from left to right)
          newChars.push({ char: text[i], isScrambled: false });
        } else {
          // Only scramble a percentage of remaining characters
          const shouldScramble = Math.random() < scrambleIntensity;
          if (shouldScramble) {
            // Show random character
            newChars.push({ 
              char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)], 
              isScrambled: true 
            });
          } else {
            // Show the actual character (creates a more subtle effect)
            newChars.push({ char: text[i], isScrambled: false });
          }
        }
      }
      
      setDisplayChars(newChars);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayChars(text.split('').map(char => ({ char, isScrambled: false })));
        isAnimatingRef.current = false;
        if (onComplete) onComplete();
      }
    };

    // Start animation immediately
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animate();
  };

  // Trigger on mount (page load / section fade-in)
  useEffect(() => {
    scramble();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]); // Re-run if text changes

  return (
    <span 
      className={className}
      style={{ display: 'inline-block' }}
    >
      {displayChars.map((item, index) => (
        <span 
          key={index} 
          style={{ color: item.isScrambled ? scrambleColor : 'inherit' }}
        >
          {item.char}
        </span>
      ))}
    </span>
  );
}