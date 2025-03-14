import Image from "next/image"
import { Play } from "lucide-react"

export default function FeaturedVideos() {
  return (
    <div id="videos">
      <h3 className="text-2xl font-serif mb-8">Featured Videos</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="relative h-48 w-full bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            <Image 
              src="/placeholder.svg?height=192&width=320" 
              alt="Design Process Walkthrough" 
              width={320} 
              height={192}
              className="object-cover w-full h-full opacity-80"
            />
          </div>
          <div className="p-4">
            <h4 className="font-medium text-lg">Design Process Walkthrough</h4>
            <p className="text-gray-600 text-sm mt-2">A detailed look at my approach to product design from research to implementation.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="relative h-48 w-full bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            <Image 
              src="/placeholder.svg?height=192&width=320" 
              alt="UI Animation Techniques" 
              width={320} 
              height={192}
              className="object-cover w-full h-full opacity-80"
            />
          </div>
          <div className="p-4">
            <h4 className="font-medium text-lg">UI Animation Techniques</h4>
            <p className="text-gray-600 text-sm mt-2">How I use subtle animations to enhance user experience and add delight.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 