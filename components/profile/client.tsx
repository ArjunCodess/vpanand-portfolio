'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import ScrambleIn, { ScrambleInHandle } from "../ui/text/scramble-in"
import Float from "../ui/float"
import { ProfileData } from "."
import Link from "next/link"

// Known platform icons map
const PLATFORM_ICONS = {
  LinkedIn: "/icons/linkedin.svg",
  Twitter: "/icons/twitter.svg",
  YouTube: "/icons/youtube.svg",
  Facebook: "/icons/facebook.svg",
  Instagram: "/icons/instagram.svg",
  Website: "/icons/link.svg",
  Default: "/icons/link.svg"
}

// Client component that handles animations and user interactions
export default function ProfileClient({ profile }: { profile: ProfileData }) {
  const nameRef = useRef<ScrambleInHandle>(null)

  useEffect(() => {
    // Start the animation after component mount with a slight delay
    const timer = setTimeout(() => {
      nameRef.current?.start()
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  // Split the full title into lines
  const titleLines = profile.fullTitle.split('\n');

  // Get the icon for a platform
  const getPlatformIcon = (platform: string, iconPath?: string) => {
    // Use provided icon if it exists
    if (iconPath) return iconPath;
    
    // Use known platform icon if available
    const knownIcon = PLATFORM_ICONS[platform as keyof typeof PLATFORM_ICONS];
    if (knownIcon) return knownIcon;
    
    // Fallback to default icon
    return PLATFORM_ICONS.Default;
  }

  // Get the display name for a platform
  const getPlatformName = (link: { platform: string }) => {
    return link.platform;
  }

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
                src={profile.image}
                alt={profile.name}
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
            text={profile.name}
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
      
      {/* Social Links */}
      {profile.socialLinks && profile.socialLinks.length > 0 && (
        <motion.div 
          className="flex space-x-4 justify-center sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.6, ease: "easeOut" }}
        >
          {profile.socialLinks.map((link, index) => (
            <Link 
              key={link.platform + index} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black transition-colors duration-200"
              title={getPlatformName(link)}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-300 hover:border-neutral-400 hover:shadow-sm transition-all duration-200">
                <Image
                  src={getPlatformIcon(link.platform, link.icon)}
                  alt={getPlatformName(link)}
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )
} 