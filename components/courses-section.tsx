import { Award } from "lucide-react"

export default function CoursesSection() {
  return (
    <div id="courses">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Courses</h1>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <div>
                <p className="font-medium">Using Blended MOOCs in Management Education</p>
                <p className="text-neutral-600">FDP by IIM Bangalore</p>
              </div>
              <p className="text-neutral-500 text-sm mt-1">Jaipuria Institute of Management</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <div>
                <p className="font-medium">Use of ICT in Education for Online and Blended Learning</p>
                <p className="text-neutral-600">FDP by IIT Mumbai - AICTE approved Four Week Program</p>
              </div>
              <p className="text-neutral-500 text-sm mt-1">Jaipuria Institute of Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 