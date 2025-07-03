"use client";

import React from 'react';

const Footer = ({ activeTab = "developer" }) => {
  const currentYear = new Date().getFullYear();

  // Theme classes based on active tab
  const isDarkTheme = activeTab === "developer";
  
  const footerClasses = isDarkTheme
    ? "bg-gradient-to-r from-gray-900 to-gray-800 border-t border-white/10"
    : "bg-gradient-to-r from-gray-100 to-gray-200 border-t border-gray-300/20";
    
  const textClasses = isDarkTheme
    ? "text-gray-400 text-center md:text-left"
    : "text-gray-600 text-center md:text-left";
    
  const subTextClasses = isDarkTheme
    ? "text-gray-500 text-sm text-center md:text-left mt-2"
    : "text-gray-500 text-sm text-center md:text-left mt-2";
    
  const borderClasses = isDarkTheme
    ? "border-t border-white/10"
    : "border-t border-gray-300/20";

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className={textClasses}>
              © {currentYear} Tejas Bhitle. All rights reserved.
            </p>
            <p className={subTextClasses}>
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <span className={subTextClasses}>Made with ❤️ by Tejas</span>
            </div>
            
          </div>
        </div>
        
        <div className={`mt-8 pt-8 ${borderClasses} text-center`}>
          <p className={subTextClasses}>
            Photography © {currentYear} Tejas Bhitle. All images are protected by copyright.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 