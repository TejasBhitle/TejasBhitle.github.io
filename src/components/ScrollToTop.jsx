"use client";

import React, { useState, useEffect } from 'react';

const ScrollToTop = ({ activeTab = "developer" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Theme classes based on active tab
  const isDarkTheme = activeTab === "developer";
  
  const buttonClasses = isDarkTheme
    ? "fixed bottom-8 right-8 z-40 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    : "fixed bottom-8 right-8 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300/50";

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={buttonClasses}
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 