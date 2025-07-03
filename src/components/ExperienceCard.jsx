"use client";

import React from 'react';
import Image from 'next/image';

const ExperienceCard = ({ experience }) => {
  const skillColors = {
    'Java': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Kafka': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Python': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Angular': 'bg-red-500/20 text-red-300 border-red-500/30',
    'Elasticsearch': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'TypeScript': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'DB2': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'PostgreSQL': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'AWS': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Docker': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Android': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Kotlin': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Firebase': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Spring': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'Bash': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'CrewAI': 'bg-teal-500/20 text-teal-300 border-teal-500/30'
  };

  const getSkillColor = (skill) => {
    return skillColors[skill] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-6 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={experience.logo || "/company-icons/default.png"}
              alt={`${experience.company} logo`}
              width={64}
              height={64}
              className="rounded-xl object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {experience.company}
            </h3>
            <p className="text-xl text-gray-300 font-semibold mb-2">
              {experience.position}
            </p>
            <p className="text-sm text-gray-400 font-medium">
              {experience.timeline}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <ul className="space-y-3">
          {experience.work && experience.work.map((point, index) => (
            <li key={index} className="flex items-center group/item">
              <span className="text-blue-400 mr-3 text-lg group-hover/item:text-blue-300 transition-colors duration-300">•</span>
              <span className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {experience.skills && experience.skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${getSkillColor(skill)} hover:scale-105 transition-transform duration-300`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard; 