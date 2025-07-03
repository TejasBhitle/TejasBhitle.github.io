"use client";

import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalImages = [
        '/profile_pic.jpeg',
        '/company-icons/barclays_logo.webp',
        '/company-icons/meta_logo.png',
        '/company-icons/ms_logo.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Intersection Observer for lazy loading
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Service Worker registration for PWA
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully');
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    // Performance monitoring
    const setupPerformanceMonitoring = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
          }, 0);
        });
      }
    };

    // Initialize all optimizations
    preloadResources();
    setupLazyLoading();
    registerServiceWorker();
    setupPerformanceMonitoring();

    // Cleanup function
    return () => {
      // Cleanup any observers or listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer; 