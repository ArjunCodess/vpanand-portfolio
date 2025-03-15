'use client'

import { useState } from "react"
import { ABOUT_DATA } from "@/lib/data"

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div id="about">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">About</h1>
      <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm">
        <div className="text-neutral-700 leading-relaxed">
          <p>{ABOUT_DATA.shortDescription}</p>
          
          {expanded && (
            <>
              {ABOUT_DATA.longDescription.map((paragraph, index) => (
                <p key={index} className="mt-4">
                  {paragraph}
                </p>
              ))}
            </>
          )}
          
          <button 
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-blue-600 font-medium hover:text-blue-800 focus:outline-none flex items-center cursor-pointer"
          >
            {expanded ? 'Read Less' : 'Read More'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}