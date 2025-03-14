'use client'

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import ScrambleIn, { ScrambleInHandle } from "../ui/text/scramble-in"
import Float from "../ui/float"
import { HeadlineData } from "."

// Client component that handles animations and user interactions
export default function HeadlineClient({ headline }: { headline: HeadlineData }) {
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
          <h2 className="text-3xl md:text-4xl font-instrument">
            <ScrambleIn
              ref={titleRef}
              text={headline.title}
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
          href={headline.contactLink}
          className="group w-full md:w-auto bg-black text-white px-6 py-3 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          {headline.contactText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        <Link 
          href={headline.workLink} 
          className="w-full md:w-auto text-sm border border-neutral-200 px-5 py-3 rounded-full text-center hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-md transition-all duration-300 hover:scale-105"
        >
          {headline.workText}
        </Link>
      </motion.div>
    </div>
  )
} 