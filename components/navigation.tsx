'use client'

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Featured Videos", href: "#featured-videos" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Publications", href: "#publications" },
    { name: "Courses", href: "#courses" },
  ];

  return (
    <nav className="mt-8">
      <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 sm:flex-col sm:space-y-2 sm:flex-nowrap">
        {navItems.map((item, index) => (
          <li key={item.name} className="w-auto sm:w-full">
            <Link 
              href={item.href}
              className="block py-2 group relative text-center sm:text-left"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-center sm:justify-between">
                <span className="text-md transition-colors duration-200">
                  {item.name}
                </span>
                <span 
                  className={`hidden sm:inline transform transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  →
                </span>
              </div>
              {/* Mobile underline (centered) */}
              <div className="sm:hidden relative h-px w-full mt-1">
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 h-px bg-neutral-900 transition-all duration-300 ${
                    hoveredIndex === index ? "w-8" : "w-0"
                  }`}
                />
              </div>
              {/* Desktop underline (full width) */}
              <div 
                className={`hidden sm:block absolute bottom-0 left-0 h-px bg-neutral-900 transition-all duration-300 ${
                  hoveredIndex === index ? "w-[80%] sm:w-full" : "w-0"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}