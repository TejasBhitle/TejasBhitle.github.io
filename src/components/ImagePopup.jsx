"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

const ImagePopup = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in-0 duration-300"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute -top-16 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={1400}
            height={900}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            unoptimized={true}
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-white text-2xl font-bold mb-2">{image.title || 'Photography'}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{image.description}</p>
                {image.location && (
                  <p className="text-white/60 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {image.location}
                  </p>
                )}
              </div>
              <div className="ml-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup; 