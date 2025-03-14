export default function WorkingExperience() {
  return (
    <div>
      <h3 className="text-2xl font-serif mb-8">Working experience</h3>

      <div className="space-y-6">
        <div className="flex gap-4 items-center bg-white rounded-full p-4 border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="w-5 h-5 bg-red-500 rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Part time Product design</p>
                <p className="text-gray-600">Berbaunesia</p>
              </div>
              <p className="text-gray-500 text-sm">Feb 2020 - Present</p>
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
                <p className="font-medium">Senior Product design</p>
                <p className="text-gray-600">Berkendara</p>
              </div>
              <p className="text-gray-500 text-sm">Feb 2020 - Feb 2023</p>
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
                <p className="font-medium">Product design</p>
                <p className="text-gray-600">Cukurkuy</p>
              </div>
              <p className="text-gray-500 text-sm">Feb 2018 - Feb 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 