'use client'

import { useState } from "react"

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)
  
  const shortDescription = "Dr Vijay Prakash Anand is a seasoned academician and practitioner in the area of Marketing and Digital Marketing. He has been ranked as India's leading 'Marketing by Vijay' fame YouTuber-Professor with 5.0 Million views and 93,000 plus subscribers. More than 17,500 students from all across the world have enrolled for his Online MOOC course 'Fundamentals of Marketing' and 'Marketing Management Masterclass' on the world's leading MOOC platform Udemy."
  
  return (
    <div id="about">
      <h3 className="text-2xl font-serif mb-8">About</h3>
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <div className="text-gray-700 leading-relaxed">
          <p>{shortDescription}</p>
          
          {expanded && (
            <>
              <p className="mt-4">
                He has written two books and edited one news magazine and three newsletters. His book &apos;Marketing Management, An Indian Perspective&apos; is recommended as a textbook for Marketing in Executive PG Program in Management at IIM Ranchi and several B-Schools and Universities. He has also directed 10 Short Films for IIM Ranchi for its Certificate Program &apos;Barefoot Managers&apos; in 2013.
              </p>
              <p className="mt-4">
                He has also developed Online Courses for iJaipuria. He has supervised content development for more than 10 Courses of more than 30 hours duration. These courses include Video Content and support material like Handouts, Quizzes etc.
              </p>
              <p className="mt-4">
                He is an expert in the area of Use of ICT in Education, MOOCs and Flipped Classes and has been trained by IIT Bombay, IIM Bangalore and IIT Kanpur.
              </p>
              <p className="mt-4">
                He has also conducted MDPs, Training and Consultancy in the area of Marketing, Sales, Digital Marketing and Social Media Marketing for esteemed organisations like Airtel, India Post, Indian Oil, PHDCCI, NHM, BPCL, Hyundai, CBEC, SBI, SSB and many nationalized banks.
              </p>
              <p className="mt-4">
                Dr Vijay is a management postgraduate in Marketing from Symbiosis, Pune and an Economics Honours graduate from St. Xavier&apos;s, Ranchi. With a PhD in the area of Green marketing, he has more than 23 years of experience in the field of Digital Marketing, Marketing, Advertising, Academics and Research. He is currently working as a Faculty - Marketing at Jaipuria Institute of Management and also looks after the Online Course Development for iJaipuria.
              </p>
              <p className="mt-4">
                He is also a Visiting Faculty to IIM Ranchi. He has taught at leading B-Schools in India like IIM Ranchi, Symbiosis, Pune, Bharti Vidyapeeth, Pune, Pune University MBA Department as a visiting faculty member and in EMPI Business School, New Delhi, NIILM Centre for Management Studies, New Delhi and IES Management College, Mumbai University, Mumbai as a full-time faculty member.
              </p>
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