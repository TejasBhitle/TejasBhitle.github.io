"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";

const FloatingActionButton = ({ resumeUrl, email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const actions = [
    {
      icon: faEnvelope,
      label: 'Email',
      href: `mailto:${email}`,
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  // Only add resume action if resumeUrl is provided and valid
  if (resumeUrl && typeof resumeUrl === 'string') {
    actions.push({
      icon: faDownload,
      label: 'Resume',
      href: resumeUrl,
      color: 'bg-green-500 hover:bg-green-600'
    });
  }

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Action buttons */}
      <div className={`flex flex-col gap-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.href && action.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={action.href && action.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className={`w-14 h-14 rounded-full ${action.color} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group`}
            title={action.label}
          >
            <FontAwesomeIcon icon={action.icon} className="text-xl" />
            <span className="absolute right-16 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {action.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main FAB button */}
      <button
        onClick={toggleMenu}
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 mt-4"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <FontAwesomeIcon 
          icon={isOpen ? faTimes : faEnvelope} 
          className="text-xl transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default FloatingActionButton; 