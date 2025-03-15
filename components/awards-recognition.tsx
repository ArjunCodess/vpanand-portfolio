import { ArrowUpRight } from "lucide-react"

export default function AwardsRecognition() {
  return (
    <div>
      <h1 className="text-2xl font-serif mb-8">Awards & Recognition</h1>

      <div className="space-y-6">
        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="font-bold text-xl">W.</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Website of the Day</p>
                <p className="text-neutral-600">Awwwards</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-neutral-500 text-sm">Feb 2022</p>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="font-bold text-xl">W.</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Site of the Day</p>
                <p className="text-neutral-600">Awwwards</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-neutral-500 text-sm">Jan 2023</p>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 