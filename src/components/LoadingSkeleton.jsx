"use client";

import React from 'react';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'experience':
        return (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 mr-6 flex-shrink-0">
                <div className="w-full h-full skeleton rounded-xl"></div>
              </div>
              <div className="flex-1">
                <div className="h-8 skeleton rounded-lg mb-2"></div>
                <div className="h-6 skeleton rounded-lg mb-2 w-3/4"></div>
                <div className="h-4 skeleton rounded-lg w-1/2"></div>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start">
                  <div className="w-4 h-4 skeleton rounded-full mr-3 mt-1"></div>
                  <div className="flex-1">
                    <div className="h-4 skeleton rounded-lg mb-1"></div>
                    <div className="h-4 skeleton rounded-lg w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-8 skeleton rounded-full"></div>
              ))}
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 mr-5 flex-shrink-0">
                <div className="w-full h-full skeleton rounded-xl"></div>
              </div>
              <div className="flex-1">
                <div className="h-8 skeleton rounded-lg mb-2"></div>
                <div className="h-6 skeleton rounded-lg w-3/4"></div>
              </div>
            </div>
            <div className="space-y-3 mb-6 flex-grow">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start">
                  <div className="w-4 h-4 skeleton rounded-full mr-3 mt-1"></div>
                  <div className="flex-1">
                    <div className="h-4 skeleton rounded-lg w-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {[1, 2].map((i) => (
                <div key={i} className="w-24 h-10 skeleton rounded-full"></div>
              ))}
            </div>
          </div>
        );

      case 'photography':
        return (
          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] skeleton"></div>
          </div>
        );

      case 'profile':
        return (
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full skeleton mb-12"></div>
            <div className="w-96 h-16 skeleton rounded-lg mb-8"></div>
            <div className="w-80 h-8 skeleton rounded-lg mb-6"></div>
            <div className="w-96 h-6 skeleton rounded-lg mb-10"></div>
            <div className="flex gap-6 mb-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-14 skeleton rounded-full"></div>
              ))}
            </div>
            <div className="w-48 h-14 skeleton rounded-full"></div>
          </div>
        );

      default:
        return (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="w-full h-32 skeleton rounded-lg mb-4"></div>
            <div className="h-6 skeleton rounded-lg mb-2"></div>
            <div className="h-4 skeleton rounded-lg w-3/4"></div>
          </div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-in fade-in-50 duration-500">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton; 