"use client";

import { useState } from 'react';

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="experience">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Experience</h1>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-red-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <p className="font-medium">Associate Professor - Marketing</p>
                <p className="text-neutral-600">Jaipuria Institute of Management</p>
              </div>
              <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Jul 2020 - Present</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-orange-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <p className="font-medium">Assistant Professor - Marketing and Chairperson</p>
                <p className="text-neutral-600">Jaipuria Institute of Management</p>
              </div>
              <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Mar 2014 - Jul 2020</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <p className="font-medium">Associate Professor - Marketing and Dean</p>
                <p className="text-neutral-600">SRMS International Business School</p>
              </div>
              <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Jul 2010 - Jan 2014</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <p className="font-medium">Senior Lecturer</p>
                <p className="text-neutral-600">IES Management College and Research Centre</p>
              </div>
              <p className="text-neutral-500 text-sm mt-2 sm:mt-0">May 2007 - Apr 2009</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-purple-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <p className="font-medium">Senior Lecturer</p>
                <p className="text-neutral-600">NIILM Centre for Management Studies</p>
              </div>
              <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Apr 2005 - Apr 2007</p>
            </div>
          </div>
        </div>

        {showAll && (
          <>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-yellow-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Lecturer</p>
                    <p className="text-neutral-600">EMPI BUSINESS SCHOOL</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Aug 2004 - Mar 2005</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-pink-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Faculty</p>
                    <p className="text-neutral-600">FBMIT</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Sep 2001 - Jul 2004</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-indigo-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Manager</p>
                    <p className="text-neutral-600">CIT Networks</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Jan 2001 - Aug 2001</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-cyan-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Manager Marketing</p>
                    <p className="text-neutral-600">Eden Web Academy</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Aug 1998 - Dec 2000</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-teal-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Client Servicing Executive</p>
                    <p className="text-neutral-600">S J Advertising Services</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Sep 1997 - Jul 1998</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-amber-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Assistant Professor</p>
                    <p className="text-neutral-600">Indus School of Business Management</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Feb 2010 - Jul 2010</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                <span className="w-5 h-5 bg-lime-500 rounded-full"></span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-medium">Assistant Professor</p>
                    <p className="text-neutral-600">Saraswati Institute of Technology and Management</p>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 sm:mt-0">Jul 2009 - Oct 2009</p>
                </div>
              </div>
            </div>
          </>
        )}
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