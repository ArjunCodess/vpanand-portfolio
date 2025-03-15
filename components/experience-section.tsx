"use client";

import { useState } from 'react';
import { EXPERIENCE_DATA } from '@/lib/data';

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  
  // Display only first 5 experiences if not showing all
  const visibleExperiences = showAll ? EXPERIENCE_DATA : EXPERIENCE_DATA.slice(0, 5);

  return (
    <div id="experience">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Experience</h1>

      <div className="space-y-6">
        {visibleExperiences.map((experience, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-full bg-${experience.color}-100 flex items-center justify-center`}>
              <span className={`w-5 h-5 bg-${experience.color}-500 rounded-full`}></span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className="font-medium">{experience.title}</p>
                  <p className="text-neutral-600">{experience.company}</p>
                </div>
                <p className="text-neutral-500 text-sm mt-2 sm:mt-0">{experience.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="cursor-pointer px-6 pt-2 pb-2.5 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-700 font-medium transition-colors"
        >
          {showAll ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
} 