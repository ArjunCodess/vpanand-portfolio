'use client';

import Link from "next/link"
import { ScrollProgress } from './motion-primitives/scroll-progress'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF7] py-4 border-b border-gray-100">
      {/* Scroll Progress Indicator */}
      <div className="absolute left-0 top-16 sm:top-17 w-full">
        <div className="absolute left-0 top-0 h-0.5 w-full bg-gray-100" />
        <ScrollProgress
          className="absolute top-0 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#333333_75%,#333333_100%)]"
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-8">
        <nav className="flex justify-between items-center">
          <div className="flex space-x-6 overflow-x-auto pb-2 md:pb-0">
            <Link href="#" className="font-medium whitespace-nowrap">
              Albert
            </Link>
            <Link href="#about" className="text-gray-600 whitespace-nowrap hover:text-black">
              About
            </Link>
            <Link href="#videos" className="text-gray-600 whitespace-nowrap hover:text-black">
              Videos
            </Link>
            <Link href="#experience" className="text-gray-600 whitespace-nowrap hover:text-black">
              Experience
            </Link>
            <Link href="#education" className="text-gray-600 whitespace-nowrap hover:text-black">
              Education
            </Link>
            <Link href="#skills" className="text-gray-600 whitespace-nowrap hover:text-black">
              Skills
            </Link>
            <Link href="#publications" className="text-gray-600 whitespace-nowrap hover:text-black">
              Publications
            </Link>
            <Link href="#courses" className="text-gray-600 whitespace-nowrap hover:text-black">
              Courses
            </Link>
          </div>
          <Link href="#" className="text-sm border border-gray-200 px-5 py-2 rounded-full hidden md:block">
            See my work
          </Link>
        </nav>
      </div>
    </header>
  )
} 