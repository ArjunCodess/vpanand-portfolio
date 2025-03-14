import { Award } from "lucide-react"

export default function CoursesSection() {
  return (
    <div id="courses">
      <h3 className="text-2xl font-serif mb-8">Courses</h3>

      <div className="space-y-6">
        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <Award className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Advanced UI Animation</p>
                <p className="text-gray-600">Motion Design School</p>
              </div>
              <p className="text-gray-500 text-sm">2023</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
            <Award className="w-5 h-5 text-pink-600" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Design Systems Masterclass</p>
                <p className="text-gray-600">DesignLab</p>
              </div>
              <p className="text-gray-500 text-sm">2022</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">UX Research Methods</p>
                <p className="text-gray-600">Nielsen Norman Group</p>
              </div>
              <p className="text-gray-500 text-sm">2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 