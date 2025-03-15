import { INDUSTRY_KNOWLEDGE, INTERPERSONAL_SKILLS, OTHER_SKILLS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <div id="skills">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Skills</h1>

      <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm space-y-6">
        {/* Industry Knowledge Section */}
        <div className="space-y-3">
          <h4 className="font-medium text-neutral-900">Industry Knowledge</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {INDUSTRY_KNOWLEDGE.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-neutral-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interpersonal Skills Section */}
        <div className="space-y-3">
          <h4 className="font-medium text-neutral-900">Interpersonal Skills</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {INTERPERSONAL_SKILLS.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-neutral-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Skills Section */}
        <div className="space-y-3">
          <h4 className="font-medium text-neutral-900">Other Skills</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {OTHER_SKILLS.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-neutral-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 