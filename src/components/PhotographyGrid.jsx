"use client";

import React from 'react';
import PhotographyImage from './PhotographyImage';

const PhotographyGrid = ({ photos, onImageClick }) => {
  return (
    <div className="max-w-[95vw] mx-auto">
      {/* Responsive masonry-style grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid mb-6">
            <PhotographyImage 
              image={photo} 
              onClick={onImageClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographyGrid; 