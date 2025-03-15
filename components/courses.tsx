import { Award } from "lucide-react"
import { getCourses } from "@/lib/sanity"

// Define type for course data that matches Sanity schema
export type CourseData = {
  title: string;
  institution: string;
  location: string;
  icon: string;
  color: string;
}

// Server component that fetches data
export default async function CoursesSection() {
  const coursesData = await getCourses();
  
  return (
    <div id="courses">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Courses</h1>

      <div className="space-y-6">
        {coursesData.map((course: CourseData, index: number) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-full bg-${course.color}-100 flex items-center justify-center shrink-0`}>
              <Award className={`w-5 h-5 text-${course.color}-600`} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <div>
                  <p className="font-medium">{course.title}</p>
                  <p className="text-neutral-600">{course.institution}</p>
                </div>
                <p className="text-neutral-500 text-sm mt-1">{course.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 