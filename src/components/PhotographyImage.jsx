"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const PhotographyImage = ({ image, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Determine aspect ratio based on orientation
  const getAspectRatio = () => {
    switch (image.orientation) {
      case 'portrait':
        return 'aspect-[2/3]'; // Taller for portrait images
      case 'landscape':
      default:
        return 'aspect-[4/3]'; // Wider for landscape images
    }
  };



  return (
    <div 
      className="group relative overflow-hidden rounded-2xl cursor-zoom-in hover:scale-[1.03] transition-all duration-500 shadow-lg hover:shadow-2xl"
      onClick={() => onClick(image)}
    >
      <div className={`${getAspectRatio()} relative`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          unoptimized={true}
        />
        
        {/* Enhanced overlay with better gradient and text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-lg font-semibold mb-1">{image.title || ''}</p>
                <p className="text-white/80 text-sm leading-relaxed">{image.description}</p>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle border overlay */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

export default PhotographyImage; 