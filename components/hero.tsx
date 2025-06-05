"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from "react"

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
}

const buttonContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6 },
  },
}

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const Hero = () => {
  const [showTagline, setShowTagline] = useState(false)

  const handleHeroClick = useCallback(() => {
    if (!showTagline) {
      setShowTagline(true)
    }
  }, [showTagline])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden cursor-pointer"
      onClick={handleHeroClick}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/general/hero.jpg"
          alt="Joyhaven Gym Interior"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight tracking-wide">
            <span className="block mb-4 text-shadow-lg">Welcome to JoyHaven</span>
            {showTagline ? (
              <motion.span
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
                className="block text-shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                Where Strength Meets Purpose!
              </motion.span>
            ) : (
              <span className="block h-16 md:h-20"></span>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Welcome to JoyHaven, your destination for fitness excellence. With top-notch facilities and expert guidance,
            we're here to help you reach your goals. Join us and let's make progress together!
          </p>
          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/explore">
              <Button className="bg-white text-[#0a1929] hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold w-full sm:w-auto transition-transform hover:scale-105">
                Explore more <ArrowRight className="ml-2 h-5 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold w-full sm:w-auto transition-transform hover:scale-105"
              >
                Join Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

