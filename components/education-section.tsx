export default function EducationSection() {
  return (
    <div id="education">
      <h3 className="text-2xl font-serif mb-8">Education</h3>

      <div className="space-y-6">
        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-purple-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Master of Design</p>
                <p className="text-gray-600">University of Creative Arts</p>
              </div>
              <p className="text-gray-500 text-sm">2015 - 2017</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Bachelor of Arts in Interaction Design</p>
                <p className="text-gray-600">Digital Arts Institute</p>
              </div>
              <p className="text-gray-500 text-sm">2011 - 2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 