import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, MessageSquare, ThumbsUp, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const reviewsData = [
  {
    id: 1,
    name: "Sarah Jones",
    image: "/images/members/member-1.jpg",
    rating: 5,
    review:
      "As a busy professional, finding time for fitness can be a challenge. But Joyhaven makes it easy with their flexible class schedules and convenient location. Plus, the positive atmosphere keeps me coming back for more!",
    date: "March 15, 2025",
  },
  {
    id: 2,
    name: "Mike Neck",
    image: "/images/members/member-2.jpg",
    rating: 5,
    review:
      "I was hesitant to join a gym at first, but Joyhaven quickly became my second home. The staff genuinely cares about your progress, and the supportive environment has helped me build confidence both inside and outside the gym.",
    date: "February 28, 2025",
  },
  {
    id: 3,
    name: "Lisa Chen",
    image: "/images/members/member-3.jpg",
    rating: 5,
    review:
      "The trainers at Joyhaven are exceptional! They've helped me achieve fitness goals I never thought possible. The community here is so welcoming and motivating.",
    date: "January 12, 2025",
  },
  {
    id: 4,
    name: "David Wilson",
    image: "/images/members/member-4.jpg",
    rating: 4,
    review:
      "Great equipment and friendly staff. The gym is always clean and well-maintained. I've been a member for over a year and have seen significant improvements in my fitness level.",
    date: "March 5, 2025",
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    image: "/images/members/member-5.jpg",
    rating: 5,
    review:
      "Joyhaven's yoga classes have transformed my approach to fitness. The instructors are knowledgeable and attentive, making each session both challenging and relaxing. Highly recommend!",
    date: "February 20, 2025",
  },
  {
    id: 6,
    name: "James Thompson",
    image: "/images/members/member-6.jpg",
    rating: 5,
    review:
      "After trying several gyms in the area, I finally found my fitness home at Joyhaven. The personal training sessions are worth every penny - my trainer pushes me to my limits while keeping workouts fun and varied.",
    date: "January 30, 2025",
  },
  {
    id: 7,
    name: "Sophia Kim",
    image: "/images/members/member-7.jpg",
    rating: 4,
    review:
      "The cycling classes at Joyhaven are incredible! High energy, great music, and instructors who really know how to motivate you. My cardio fitness has improved dramatically since joining.",
    date: "March 10, 2025",
  },
  {
    id: 8,
    name: "Marcus Johnson",
    image: "/images/members/member-8.jpg",
    rating: 5,
    review:
      "As someone who was intimidated by gyms, Joyhaven has been a game-changer. The staff made me feel welcome from day one, and the variety of equipment means I never get bored with my workouts.",
    date: "February 15, 2025",
  },
]

export default function ReviewsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-4">Customer Reviews</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what our members have to say about their experience at Joyhaven
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">4.9</h3>
              <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Reviews</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">98%</h3>
              <p className="text-gray-600 dark:text-gray-300">Satisfaction Rate</p>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-navy-800 dark:text-white">Member Testimonials</h2>
              <div className="flex items-center bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Verified Reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">{review.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 italic">"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Share Your Experience</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We value your feedback! Let us know about your experience at Joyhaven and help us continue to improve our
              services.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Write a Review</Button>
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

