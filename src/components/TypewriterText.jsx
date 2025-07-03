"use client";

import React, { useState, useEffect } from 'react';

const TypewriterText = ({ texts, speed = 100, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }
  }, [currentTextIndex, currentCharIndex, isDeleting, texts, speed, delay]);

  const currentText = texts[currentTextIndex];
  const displayText = currentText.substring(0, currentCharIndex);

  return (
    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
      {displayText}
      <span className="inline-block w-0.5 h-6 bg-gradient-to-b from-blue-400 to-purple-500 ml-1 animate-pulse"></span>
    </span>
  );
};

export default TypewriterText; 