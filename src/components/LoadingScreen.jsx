"use client";

import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Preparing the portfolio...",
    "Setting up the gallery...",
    "Almost ready...",
    "Welcome!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        if (prev < loadingTexts.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo/Profile Image */}
        <div className="mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Tejas Bhitle
          </h1>
          <p className="text-gray-300 text-lg md:text-xl animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto mb-8">
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-2">{progress}%</p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 