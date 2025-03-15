import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 rounded-t-xl sm:rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full flex justify-center py-3 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex items-center justify-center gap-x-8 gap-y-4 md:space-x-6 lg:space-x-8">
            <Link
              href="#about"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              About
            </Link>
            <Link
              href="#featured-videos"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              Featured Videos
            </Link>
            <Link
              href="#experience"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              Skills
            </Link>
            <Link
              href="#publications"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              Publications
            </Link>
            <Link
              href="#courses"
              className="text-neutral-400 hover:text-white transition-colors text-center"
            >
              Courses
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/sdff.png"
                alt="Dr. Vijay Prakash Anand"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left mt-2 sm:mt-0">
              <p className="font-medium">Dr. Vijay Prakash Anand</p>
              <p className="text-sm text-neutral-400">
                Marketing Professor & Digital Marketing Expert
              </p>
            </div>
          </div>
          
          <div>
            <Link 
              href="mailto:vpanand73@gmail.com"
              className="bg-white text-black px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2"
            >
              Contact me <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-10 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>
            © {new Date().getFullYear()} Dr. Vijay Prakash Anand. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
