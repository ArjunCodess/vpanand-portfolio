import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF7] py-4 border-b border-gray-100">
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