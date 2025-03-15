import { getSkillCategories } from "@/lib/sanity";

// Define type for skill category data that matches Sanity schema
export type SkillCategoryData = {
  title: string;
  skills: string[];
}

// Map of category titles to colors
const categoryColors: Record<string, string> = {
  "Industry Knowledge": "blue",
  "Interpersonal Skills": "green",
  "Other Skills": "purple"
};

// Server component that fetches data
export default async function SkillsSection() {
  const skillCategories = await getSkillCategories();
  
  return (
    <div id="skills">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Skills</h1>

      <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm space-y-6">
        {skillCategories.map((category: SkillCategoryData, categoryIndex: number) => (
          <div key={categoryIndex} className="space-y-3">
            <h4 className="font-medium text-neutral-900">{category.title}</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {category.skills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-${categoryColors[category.title] || 'blue'}-500 rounded-full`}></span>
                  <span className="text-neutral-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 