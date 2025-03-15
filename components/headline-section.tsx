import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeadlineSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-serif">LinkedIn Top Voice • Professor • YouTuber • Author • Visiting Faculty at IIM Ranchi</h2>
      <div className="flex space-x-4">
        <Link 
          href="mailto:vpanand73@gmail.com"
          className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2"
        >
          Talk with me <ArrowRight className="w-4 h-4" />
        </Link>
        <Link 
          href="#publications" 
          className="text-sm border border-gray-200 px-5 py-3 rounded-full"
        >
          See my work
        </Link>
      </div>
    </div>
  )
}