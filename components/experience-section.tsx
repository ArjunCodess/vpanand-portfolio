export default function ExperienceSection() {
  return (
    <div id="experience">
      <h3 className="text-2xl font-serif mb-8">Experience</h3>

      <div className="space-y-6">
        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-red-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Senior Product Designer</p>
                <p className="text-gray-600">DesignHub</p>
              </div>
              <p className="text-gray-500 text-sm">Jan 2022 - Present</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-orange-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Product Designer</p>
                <p className="text-gray-600">CreativeLabs</p>
              </div>
              <p className="text-gray-500 text-sm">Mar 2019 - Dec 2021</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">UI/UX Designer</p>
                <p className="text-gray-600">TechInnovate</p>
              </div>
              <p className="text-gray-500 text-sm">Jun 2017 - Feb 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 