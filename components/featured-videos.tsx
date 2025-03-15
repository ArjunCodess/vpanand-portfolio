import Image from "next/image";
import { Play, Youtube } from "lucide-react";
import Link from "next/link";
import { getFeaturedVideos } from "@/lib/sanity";

// Define type for video data that matches Sanity schema
export type VideoData = {
  title: string;
  description: string;
  link: string;
  image: string;
  views: string;
  platform: string;
}

// Server component that fetches data
export default async function FeaturedVideos() {
  const featuredVideos = await getFeaturedVideos();
  
  return (
    <div id="featured-videos">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Featured Videos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredVideos.map((video: VideoData, index: number) => (
          <Link
            key={index}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer group"
          >
            <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 rounded-full bg-black bg-opacity-70 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
              <Image
                src={video.image}
                alt={video.title}
                width={320}
                height={180}
                className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              {/* Badge for views */}
              <div className="absolute top-3 right-3 bg-black bg-opacity-80 text-white text-xs py-1 px-2 rounded-full z-10">
                {video.views}
              </div>
              {/* YouTube icon */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-red-600 bg-opacity-90 text-white text-xs py-1 px-2 rounded-full z-10">
                <Youtube className="w-3 h-3" />
                <span className="text-[10px]">{video.platform}</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-lg group-hover:text-black/80">
                {video.title}
              </h4>
              <p className="text-neutral-600 text-sm mt-2 line-clamp-2">
                {video.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
