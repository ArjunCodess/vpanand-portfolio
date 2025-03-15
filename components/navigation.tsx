'use client'

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  id: string;
}

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navItems: NavItem[] = [
    { name: "About", id: "about" },
    { name: "Featured Videos", id: "featured-videos" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Publications", id: "publications" },
    { name: "Courses", id: "courses" },
  ];

  return (
    <nav className="mt-8 block sm:hidden border rounded-lg mb-16 px-4 py-3 shadow-sm">
      <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
        {navItems.map((item, index) => (
          <li key={item.name} className="w-auto">
            <Link 
              href={`#${item.id}`}
              className="block py-2 px-3 group relative text-center hover:bg-neutral-50 rounded-lg transition-all hover:scale-105"
            >
              <div 
                className="flex items-center justify-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="text-md transition-colors duration-200 font-medium">
                  {item.name}
                </span>
              </div>
              {/* Mobile underline (centered) */}
              <div className="relative h-px w-full mt-1">
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 h-px bg-neutral-900 transition-all duration-300 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}