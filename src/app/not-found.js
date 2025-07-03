"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-display">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faHome} className="mr-3" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
            Go Back
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            If you believe this is an error, please contact me at{' '}
            <a 
              href="mailto:tejas.bhitle@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              tejas.bhitle@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 