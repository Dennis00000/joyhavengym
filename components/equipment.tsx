"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { memo } from "react"

const equipmentData = [
  {
    id: 1,
    image: "/images/equipment/strength-training-machine.jpg",
    alt: "Strength training machine",
  },
  {
    id: 2,
    image: "/images/equipment/cable-machine.jpg",
    alt: "Cable machine",
  },
  {
    id: 3,
    image: "/images/equipment/dumbbell-rack.jpg",
    alt: "Dumbbell rack",
  },
  {
    id: 4,
    image: "/images/equipment/smith-machine.jpg",
    alt: "Smith machine",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6 },
  },
}

const EquipmentItem = memo(({ item }) => (
  <motion.div
    key={item.id}
    variants={itemVariants}
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
  >
    <div className="relative h-64 overflow-hidden">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
  </motion.div>
))

EquipmentItem.displayName = "EquipmentItem"

const Equipment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="equipment" className="py-20 section-bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-lg uppercase tracking-wider text-blue-600 font-semibold mb-3">GALLERY</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 heading-enhanced">Gym Equipment Photos</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our state-of-the-art equipment designed to help you achieve your fitness goals efficiently and
            safely.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {equipmentData.map((item) => (
            <EquipmentItem key={item.id} item={item} />
          ))}
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <Link href="/equipment">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 font-semibold">
              See more here <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Equipment

