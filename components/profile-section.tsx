'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import ScrambleIn, { ScrambleInHandle } from "./ui/text/scramble-in"
import Float from "./ui/float"
import { PROFILE_DATA } from "@/lib/data"

export default function ProfileSection() {
  const nameRef = useRef<ScrambleInHandle>(null)

  useEffect(() => {
    // Start the animation after component mount with a slight delay
    const timer = setTimeout(() => {
      nameRef.current?.start()
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  // Split the full title into lines
  const titleLines = PROFILE_DATA.fullTitle.split('\n');

  return (
    <div className="space-y-6 flex flex-col items-center sm:items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.2, ease: "easeOut" }}
        className="p-4"
      >
        <div className="relative">
          <Float 
            amplitude={[3, 6, 9]}
            speed={0.4}
            rotationRange={[3, 3, 2]}
          >
            <div className="border border-neutral-300 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-lg hover:scale-105 duration-200 transition-transform">
              <Image
                src={PROFILE_DATA.image}
                alt={PROFILE_DATA.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </Float>
        </div>
      </motion.div>
      <motion.div 
        className="space-y-2 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.4, ease: "easeOut" }}
      >
        <h1 className="font-instrument text-3xl sm:text-4xl font-medium">
          <ScrambleIn
            ref={nameRef}
            text={PROFILE_DATA.name}
            scrambleSpeed={30}
            scrambledLetterCount={4}
            autoStart={false}
            className="text-black"
            scrambledClassName="text-neutral-400"
          />
        </h1>
        <p className="text-neutral-700 text-base sm:text-lg">
          {titleLines[0]}
          <br className="hidden sm:block" />{" "}
          {titleLines[1]}
        </p>
      </motion.div>
    </div>
  )
}