import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Shield, Zap, Clock, Medal, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-4">About Joyhaven</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Where Every Rep Builds Your Best Self
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/general/about-team.jpg"
                alt="Joyhaven Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2023, Joyhaven began with a simple mission: to create a fitness environment where everyone
                feels welcome and empowered to achieve their personal best. What started as a small studio has grown
                into a comprehensive fitness center that maintains the personal touch and community spirit that makes us
                special.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                At Joyhaven, we're dedicated to your holistic fitness journey. Our expert trainers and diverse range of
                classes cater to all levels, ensuring you reach your goals with support every step of the way. Join our
                empowering community and unlock your full potential today!
              </p>

              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">10+ Years Experience</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dedicated to fitness excellence</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Medal className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Certified Trainers</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expert guidance for your journey</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Member Satisfaction</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Your success is our priority</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-6 text-center">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in the power of community to motivate, inspire, and support each member on their fitness
                  journey.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We operate with honesty, transparency, and a commitment to doing what's best for our members.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for excellence in our facilities, programs, and service to help you achieve your personal
                  best.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/general/facility.jpg"
                alt="Joyhaven Facility"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/general/trainers.jpg"
                alt="Joyhaven Trainers"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Join Our Community</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover a new level of fitness at Joyhaven. From dynamic workouts to a welcoming community, we provide
              the tools and encouragement you need to succeed. Join us and unleash your strength today!
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
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

