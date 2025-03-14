import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="w-40 h-40 rounded-3xl overflow-hidden">
        <Image
          src="/image.pngdfdg"
          alt="Albert Flores"
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-medium">I&apos;m Albert Flores</h1>
        <p className="text-gray-700 text-lg">
          Digital Product Designer based
          <br />
          in Tegal, Indonesia.
        </p>
      </div>
    </div>
  )
} 