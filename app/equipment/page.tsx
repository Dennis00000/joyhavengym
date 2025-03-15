import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Info, Maximize2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const equipmentData = [
  {
    id: 1,
    name: "Strength Training Machine",
    description: "Professional-grade strength training equipment for building muscle and improving overall fitness.",
    image: "/images/equipment/strength-training-machine.jpg",
    brand: "TechnoGym",
    category: "Strength",
  },
  {
    id: 2,
    name: "Cable Machine",
    description: "Versatile cable machine for a wide range of exercises targeting different muscle groups.",
    image: "/images/equipment/cable-machine.jpg",
    brand: "Life Fitness",
    category: "Strength",
  },
  {
    id: 3,
    name: "Dumbbell Rack",
    description: "Complete set of dumbbells for free weight training and muscle development.",
    image: "/images/equipment/dumbbell-rack.jpg",
    brand: "Rogue Fitness",
    category: "Free Weights",
  },
  {
    id: 4,
    name: "Smith Machine",
    description: "Versatile weight machine with a barbell fixed within steel rails for guided movements.",
    image: "/images/equipment/smith-machine.jpg",
    brand: "Matrix",
    category: "Strength",
  },
  {
    id: 5,
    name: "Leg Press Machine",
    description: "Heavy-duty leg press for lower body strength training and muscle building.",
    image: "/images/equipment/leg-press-machine.jpg",
    brand: "Cybex",
    category: "Strength",
  },
  {
    id: 6,
    name: "Rowing Machine",
    description: "Cardio equipment that provides a full-body workout with low impact on joints.",
    image: "/images/equipment/rowing-machine.jpg",
    brand: "Concept2",
    category: "Cardio",
  },
  {
    id: 7,
    name: "Elliptical Trainer",
    description: "Low-impact cardio machine that simulates walking, running and stair climbing.",
    image: "/images/equipment/elliptical-trainer.jpg",
    brand: "NordicTrack",
    category: "Cardio",
  },
  {
    id: 8,
    name: "Exercise Bike",
    description: "Stationary bike for cardiovascular workouts and lower body conditioning.",
    image: "/images/equipment/exercise-bike.jpg",
    brand: "Schwinn",
    category: "Cardio",
  },
  {
    id: 9,
    name: "Bench Press",
    description: "Adjustable bench with rack for chest, shoulder, and triceps exercises.",
    image: "/images/equipment/bench-press.jpg",
    brand: "Hammer Strength",
    category: "Strength",
  },
  {
    id: 10,
    name: "Kettlebell Set",
    description: "Collection of kettlebells for functional strength training and dynamic movements.",
    image: "/images/equipment/kettlebell-set.jpg",
    brand: "Eleiko",
    category: "Free Weights",
  },
]

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a1929] transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-4 text-center">
            Our Equipment Collection
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
            Explore our state-of-the-art fitness equipment designed to help you achieve your fitness goals
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Maximize2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">10,000+ sq ft</h3>
              <p className="text-gray-600 dark:text-gray-300">Facility Size</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">100+ Machines</h3>
              <p className="text-gray-600 dark:text-gray-300">Premium Equipment</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Top Brands</h3>
              <p className="text-gray-600 dark:text-gray-300">Industry Leading Quality</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button variant="outline" className="rounded-full">
              All Equipment
            </Button>
            <Button variant="outline" className="rounded-full">
              Strength
            </Button>
            <Button variant="outline" className="rounded-full">
              Cardio
            </Button>
            <Button variant="outline" className="rounded-full">
              Free Weights
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentData.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Brand:</span>
                    <span className="ml-2">{item.brand}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <div className="fixed bottom-5 right-5 z-50">
        <ThemeToggle />
      </div>
    </main>
  )
}

