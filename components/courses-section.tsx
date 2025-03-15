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
            <div>
              <div>
                <p className="font-medium">Using Blended MOOCs in Management Education</p>
                <p className="text-gray-600">FDP by IIM Bangalore</p>
              </div>
              <p className="text-gray-500 text-sm">Jaipuria Institute of Management</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div>
              <div>
                <p className="font-medium">Use of ICT in Education for Online and Blended Learning</p>
                <p className="text-gray-600">FDP by IIT Mumbai - AICTE approved Four Week Program</p>
              </div>
              <p className="text-gray-500 text-sm">Jaipuria Institute of Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 