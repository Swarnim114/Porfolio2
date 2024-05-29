// src/components/Typewriter/Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, loop = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    if (index < text.length && direction === 1) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (index > 0 && direction === -1) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (loop) {
      setDirection((prev) => -prev);
    }
  }, [index, direction, text, speed, loop]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
