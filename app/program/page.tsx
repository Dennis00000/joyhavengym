import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Dumbbell, Users, SpaceIcon as Yoga, Bike, User, Utensils } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const programData = [
  {
    id: 1,
    title: "Group Fitness",
    description:
      "Join our energetic group classes designed for all fitness levels. Our certified trainers will guide you through effective workouts that combine cardio, strength, and flexibility training.",
    image: "/images/programs/fitness-group.jpg",
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Yoga & Meditation",
    description:
      "Find balance and inner peace with our mindfulness-focused sessions. Our yoga classes range from gentle to power yoga, suitable for beginners and advanced practitioners alike.",
    image: "/images/programs/yoga.jpg",
    icon: <Yoga className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cycling Club",
    description:
      "Experience the thrill of cycling with our dedicated cycling community. Our high-energy spin classes will boost your cardio fitness and strengthen your lower body.",
    image: "/images/programs/cycling.jpg",
    icon: <Bike className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 4,
    title: "Personal Training",
    description:
      "Get personalized attention and customized workout plans with our expert personal trainers. Achieve your fitness goals faster with one-on-one guidance.",
    image: "/images/programs/personal-training.jpg",
    icon: <User className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 5,
    title: "Strength Training",
    description:
      "Build muscle, increase strength, and improve your overall fitness with our comprehensive strength training programs designed for all experience levels.",
    image: "/images/programs/strength-training.jpg",
    icon: <Dumbbell className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 6,
    title: "Nutrition Counseling",
    description:
      "Complement your fitness routine with expert nutrition advice. Our certified nutritionists will help you develop healthy eating habits that support your fitness goals.",
    image: "/images/programs/nutrition.jpg",
    icon: <Utensils className="h-6 w-6 text-blue-600" />,
  },
]

export default function ProgramPage() {
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
            Our Programs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Discover our comprehensive range of fitness programs designed to help you achieve your health and wellness
            goals. Whether you're just starting your fitness journey or looking to take your training to the next level,
            we have something for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programData.map((program) => (
              <div
                key={program.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">{program.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Learn More</Button>
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

