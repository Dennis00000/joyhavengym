"use client"

import { Users, SpaceIcon as Yoga, Bike, User, Dumbbell, Utensils } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const programData = [
  {
    id: 1,
    title: "Group Fitness",
    description: "Join our energetic group classes designed for all fitness levels.",
    image: "/images/programs/fitness-group.jpg",
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Yoga & Meditation",
    description: "Find balance and inner peace with our mindfulness-focused sessions.",
    image: "/images/programs/yoga.jpg",
    icon: <Yoga className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cycling Club",
    description: "Experience the thrill of cycling with our dedicated cycling community.",
    image: "/images/programs/cycling.jpg",
    icon: <Bike className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 4,
    title: "Personal Training",
    description: "Get personalized attention and customized workout plans with our expert personal trainers.",
    image: "/images/programs/personal-training.jpg",
    icon: <User className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 5,
    title: "Strength Training",
    description: "Build muscle, increase strength, and improve your overall fitness.",
    image: "/images/programs/strength-training.jpg",
    icon: <Dumbbell className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 6,
    title: "Nutrition Counseling",
    description: "Complement your fitness routine with expert nutrition advice.",
    image: "/images/programs/nutrition.jpg",
    icon: <Utensils className="h-6 w-6 text-blue-600" />,
  },
]

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="programs" className="py-20 section-bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg uppercase tracking-wider text-blue-600 font-semibold mb-3">OUR PROGRAMS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 heading-enhanced">
            Explore Our Fitness Programs
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover a variety of fitness programs tailored to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programData.map((program) => (
            <motion.div
              key={program.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: program.id * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                </div>
                <p className="text-gray-600">{program.description}</p>
                <Link href="/program">
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs

