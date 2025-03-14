import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Albert Flores"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">I&apos;m Albert Flores</p>
              <p className="text-sm text-gray-400">Digital Product Designer based in Tegal, Indonesia.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-2">
              <p className="text-gray-400">Services</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">About me</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Case studies</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Contact us</p>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm">Talk with me</button>
          </div>
        </div>
      </div>
    </footer>
  )
} 