"use client";

import React, { useEffect } from 'react';

const KeyboardShortcuts = ({ onTabChange, activeTab, onScrollToTop, onToggleTheme }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts when typing in input fields
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // Ctrl/Cmd + K: Toggle theme
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onToggleTheme?.();
      }

      // Ctrl/Cmd + 1: Switch to Developer tab
      if ((e.ctrlKey || e.metaKey) && e.key === '1') {
        e.preventDefault();
        onTabChange?.('developer');
      }

      // Ctrl/Cmd + 2: Switch to Photographer tab
      if ((e.ctrlKey || e.metaKey) && e.key === '2') {
        e.preventDefault();
        onTabChange?.('photographer');
      }

      // Home: Scroll to top
      if (e.key === 'Home') {
        e.preventDefault();
        onScrollToTop?.();
      }

      // Escape: Close any open modals/popups
      if (e.key === 'Escape') {
        // This will be handled by individual components
      }

      // Tab navigation with arrow keys
      if (e.key === 'ArrowLeft' && activeTab === 'photographer') {
        e.preventDefault();
        onTabChange?.('developer');
      }

      if (e.key === 'ArrowRight' && activeTab === 'developer') {
        e.preventDefault();
        onTabChange?.('photographer');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTabChange, activeTab, onScrollToTop, onToggleTheme]);

  return null; // This component doesn't render anything
};

export default KeyboardShortcuts; 