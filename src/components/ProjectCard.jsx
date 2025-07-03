"use client";

import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full">
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 mr-5 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={project.icon}
              alt={project.name}
              width={64}
              height={64}
              className="rounded-xl object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
        
        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            {project.points.map((point, index) => (
              <li key={index} className="flex items-center group/item">
                <span className="text-blue-400 mr-3 text-lg group-hover/item:text-blue-300 transition-colors duration-300">•</span>
                <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-full text-sm font-medium hover:bg-gray-500/30 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium hover:bg-blue-500/30 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Website
            </a>
          )}
          
          {project.links.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-sm font-medium hover:bg-green-500/30 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9.5 6.5a.5.5 0 011 0v2.5H13a.5.5 0 010 1h-2.5V13a.5.5 0 01-1 0v-2.5H6a.5.5 0 010-1h2.5V6.5z" />
              </svg>
              Play Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 