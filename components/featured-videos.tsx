import Image from "next/image";
import { Play, Youtube } from "lucide-react";
import Link from "next/link";

export default function FeaturedVideos() {
  return (
    <div id="videos">
      <h3 className="text-2xl font-serif mb-8">Featured Videos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video 1 - Marketing in Hindi */}
        <Link
          href="https://youtu.be/uOe-ykEtpk0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer group"
        >
          <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-black bg-opacity-70 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            <Image
              src="/video1.avif"
              alt="Marketing in Hindi"
              width={320}
              height={180}
              className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
            />
            {/* Badge for views */}
            <div className="absolute top-3 right-3 bg-black bg-opacity-80 text-white text-xs py-1 px-2 rounded-full z-10">
              1M+ views
            </div>
            {/* YouTube icon */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-red-600 bg-opacity-90 text-white text-xs py-1 px-2 rounded-full z-10">
              <Youtube className="w-3 h-3" />
              <span className="text-[10px]">YouTube</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-medium text-lg group-hover:text-black/80">
              Marketing in Hindi
            </h4>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              The first question that comes to mind in marketing is – What is
              marketing? You will find the answer to this in our first Hindi
              video.
            </p>
          </div>
        </Link>

        {/* Video 2 - 4Ps of Marketing */}
        <Link
          href="https://youtu.be/t8_PBTl02Hg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer group"
        >
          <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-black bg-opacity-70 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            <Image
              src="/video2.avif"
              alt="4Ps of Marketing"
              width={320}
              height={180}
              className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
            />
            {/* Badge for views */}
            <div className="absolute top-3 right-3 bg-black bg-opacity-80 text-white text-xs py-1 px-2 rounded-full z-10">
              357K+ views
            </div>
            {/* YouTube icon */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-red-600 bg-opacity-90 text-white text-xs py-1 px-2 rounded-full z-10">
              <Youtube className="w-3 h-3" />
              <span className="text-[10px]">YouTube</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-medium text-lg group-hover:text-black/80">
              4Ps of Marketing
            </h4>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              In this video, I have talked about one of the most important
              concepts in Marketing - Marketing Mix. It is also widely known as
              4P&apos;s of Marketing.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
