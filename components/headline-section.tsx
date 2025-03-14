import { ArrowRight } from "lucide-react"

export default function HeadlineSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-serif">Passionate creating great experiences for Digital Product</h2>
      <div className="flex space-x-4">
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2">
          Talk with me <ArrowRight className="w-4 h-4" />
        </button>
        <button className="text-sm border border-gray-200 px-5 py-3 rounded-full">See my work</button>
      </div>
    </div>
  )
} 