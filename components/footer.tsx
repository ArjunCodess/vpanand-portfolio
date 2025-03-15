import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS, PROFILE_DATA, COPYRIGHT_TEXT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 rounded-t-xl sm:rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Navigation links - only visible on mobile */}
        <div className="w-full flex justify-center py-3 mb-8 sm:hidden">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.name}
                href={`#${item.id}`}
                className="text-neutral-400 hover:text-white transition-colors hover:scale-105 transform"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={PROFILE_DATA.image}
                alt={PROFILE_DATA.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left mt-2 sm:mt-0">
              <p className="font-medium">{PROFILE_DATA.name}</p>
              <p className="text-sm text-neutral-400">
                {PROFILE_DATA.title}
              </p>
            </div>
          </div>
          
          <div>
            <Link 
              href={`mailto:${PROFILE_DATA.email}`}
              className="group bg-white text-black px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-neutral-100 hover:scale-105 transition-all hover:shadow-md duration-300"
            >
              Contact me <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-10 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>
            {COPYRIGHT_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
}
