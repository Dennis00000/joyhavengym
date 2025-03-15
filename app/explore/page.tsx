import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const exploreData = [
  {
    id: 1,
    title: "Group Fitness Classes",
    description: "Join our energetic group classes designed for all fitness levels with certified trainers.",
    image: "/images/programs/fitness-group.jpg",
  },
  {
    id: 2,
    title: "Yoga & Meditation",
    description: "Find balance and inner peace with our mindfulness-focused sessions for all experience levels.",
    image: "/images/programs/yoga.jpg",
  },
  {
    id: 3,
    title: "Cycling Club",
    description: "Experience the thrill of cycling with our dedicated community and high-energy spin classes.",
    image: "/images/programs/cycling.jpg",
  },
  {
    id: 4,
    title: "Personal Training",
    description: "Get personalized attention and customized workout plans with our expert personal trainers.",
    image: "/images/programs/personal-training.jpg",
  },
  {
    id: 5,
    title: "Strength Training",
    description: "Build muscle and improve overall fitness with our comprehensive strength training programs.",
    image: "/images/programs/strength-training.jpg",
  },
  {
    id: 6,
    title: "Nutrition Counseling",
    description: "Complement your fitness routine with expert nutrition advice from our certified nutritionists.",
    image: "/images/programs/nutrition.jpg",
  },
]

export default function ExplorePage() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-8">Explore Joyhaven</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreData.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={`${item.title}`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
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

