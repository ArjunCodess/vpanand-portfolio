'use client'

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import ScrambleIn, { ScrambleInHandle } from "./ui/text/scramble-in"
import Float from "./ui/float"

export default function HeadlineSection() {
  const titleRef = useRef<ScrambleInHandle>(null)

  useEffect(() => {
    // Start the animation after component mount
    const timer = setTimeout(() => {
      titleRef.current?.start()
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      >
        <Float
          amplitude={[2, 5, 3]} 
          speed={0.2}
          rotationRange={[1, 1, 0.5]}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif">
            <ScrambleIn
              ref={titleRef}
              text="LinkedIn Top Voice • Professor • YouTuber • Author • Visiting Faculty at IIM Ranchi"
              scrambleSpeed={40}
              scrambledLetterCount={5}
              autoStart={false}
              className="text-black"
              scrambledClassName="text-neutral-400"
            />
          </h2>
        </Float>
      </motion.div>
      <motion.div 
        className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
      >
        <Link 
          href="mailto:vpanand73@gmail.com"
          className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center justify-center gap-2"
        >
          Talk with me <ArrowRight className="w-4 h-4" />
        </Link>
        <Link 
          href="#publications" 
          className="text-sm border border-neutral-200 px-5 py-3 rounded-full text-center"
        >
          See my work
        </Link>
      </motion.div>
    </div>
  )
}