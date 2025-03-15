import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function PublicationsSection() {
  return (
    <div id="publications">
      <h3 className="text-2xl font-serif mb-8">Publications</h3>

      <div className="space-y-6">
        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-full">
            <span className="font-bold text-xl text-red-600">YT</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">YouTube Channel - &apos;Marketing by Vijay&apos;</p>
                <p className="text-gray-600">https://www.youtube.com/c/marketingbyvijay</p>
              </div>
              <Link 
                href="https://www.youtube.com/c/marketingbyvijay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <p className="text-gray-500 text-sm">Dec 2014</p>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full">
            <span className="font-bold text-xl text-blue-600">B</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Marketing Management, An Indian Perspective</p>
                <p className="text-gray-600">Biztantra Dreamtech Press, Distributed by Wiley International</p>
              </div>
              <Link 
                href="https://www.ia.ooo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <p className="text-gray-500 text-sm">Nov 2011</p>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}