import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TYPING_SPEED = 120;
const CURSOR_BLINK_SPEED = 500;

interface TypewriterEffectProps {
  text: string;
  className?: string;
  onComplete?: () => void;
  highlightIndices?: number[];
  isHighlighted?: boolean;
}

export function TypewriterEffect({
  text,
  className = '',
  onComplete,
  highlightIndices = [],
  isHighlighted = false,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing interval
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    // Reset and start typing
    setDisplayedText('');
    let i = 0;
    typingIntervalRef.current = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }
        onComplete?.();
      }
    }, TYPING_SPEED);

    // Cleanup
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [text, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_SPEED);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText.split('').map((char, i) => {
        const shouldHighlight = isHighlighted && highlightIndices.includes(i);
        return (
          <motion.span
            key={i}
            animate={{
              color: shouldHighlight ? '#3b82f6' : '#f3f4f6',
              textShadow: shouldHighlight
                ? '0 0 20px rgba(59,130,246,0.9)'
                : '0 0 0px rgba(59,130,246,0)',
            }}
            transition={{ duration: 0.3 }}
          >
            {char}
          </motion.span>
        );
      })}
      <motion.span
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-blue-400"
        aria-hidden="true"
      >
        |
      </motion.span>
    </span>
  );
}