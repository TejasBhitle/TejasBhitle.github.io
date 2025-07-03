"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationTriangle, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const Toast = ({ message, type = 'info', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return faCheckCircle;
      case 'error':
        return faExclamationTriangle;
      case 'warning':
        return faExclamationTriangle;
      default:
        return faInfoCircle;
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed top-8 right-8 z-50 max-w-sm w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="flex items-center p-4">
        <div className={`w-8 h-8 rounded-full ${getColorClasses()} flex items-center justify-center mr-3`}>
          <FontAwesomeIcon icon={getIcon()} className="text-sm" />
        </div>
        <div className="flex-1">
          <p className="text-white font-medium">{message}</p>
        </div>
        <button
          onClick={handleClose}
          className="ml-3 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Toast; 