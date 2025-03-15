import { EDUCATION_DATA } from "@/lib/data";

export default function EducationSection() {
  return (
    <div id="education">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Education</h1>

      <div className="space-y-6">
        {EDUCATION_DATA.map((education, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-full bg-${education.color}-100 flex items-center justify-center shrink-0`}>
              <span className={`w-5 h-5 bg-${education.color}-500 rounded-full`}></span>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between w-full">
              <div>
                <div>
                  <p className="font-medium">{education.degree}</p>
                  <p className="text-neutral-600">{education.institution}</p>
                </div>
                {education.description && (
                  <p className="text-neutral-600 text-sm mt-1">{education.description}</p>
                )}
              </div>
              <p className="text-neutral-500 text-sm mt-2 sm:mt-0 sm:ml-4 sm:self-center">{education.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 