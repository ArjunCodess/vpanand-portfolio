'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import ScrambleIn, { ScrambleInHandle } from "./ui/text/scramble-in"
import Float from "./ui/float"

export default function ProfileSection() {
  const nameRef = useRef<ScrambleInHandle>(null)

  useEffect(() => {
    // Start the animation after component mount with a slight delay
    const timer = setTimeout(() => {
      nameRef.current?.start()
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 flex flex-col items-center sm:items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.2, ease: "easeOut" }}
      >
        <Float 
          amplitude={[5, 10, 15]} 
          speed={0.4}
          rotationRange={[5, 5, 3]}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-lg hover:scale-105 duration-200 transition-transform">
            <Image
              src="/image.png"
              alt="Dr. Vijay Prakash Anand"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
        </Float>
      </motion.div>
      <motion.div 
        className="space-y-2 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-medium">
          <span className="inline-block text-xl mr-2">I&apos;m</span>
          <ScrambleIn
            ref={nameRef}
            text="Dr. Vijay Prakash Anand"
            scrambleSpeed={30}
            scrambledLetterCount={4}
            autoStart={false}
            className="text-black"
            scrambledClassName="text-neutral-400"
          />
        </h1>
        <p className="text-neutral-700 text-base sm:text-lg">
          Marketing Professor & Digital
          <br className="hidden sm:block" />
          Marketing Expert with 5M+ YouTube Views
        </p>
      </motion.div>
    </div>
  )
}