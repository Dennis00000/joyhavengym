"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, memo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const reviewsData = [
  {
    id: 1,
    name: "Sarah Jones",
    image: "/images/members/avatar-1.jpg",
    review:
      "As a busy professional, finding time for fitness can be a challenge. But Joyhaven makes it easy with their flexible class schedules and convenient location. Plus, the positive atmosphere keeps me coming back for more!",
  },
  {
    id: 2,
    name: "Mike Neck",
    image: "/images/members/avatar-2.jpg",
    review:
      "I was hesitant to join a gym at first, but Joyhaven quickly became my second home. The staff genuinely cares about your progress, and the supportive environment has helped me build confidence both inside and outside the gym.",
  },
  {
    id: 3,
    name: "Lisa Chen",
    image: "/images/members/avatar-3.jpg",
    review:
      "The trainers at Joyhaven are exceptional! They've helped me achieve fitness goals I never thought possible. The community here is so welcoming and motivating.",
  },
]

const ReviewItem = memo(({ review, isActive }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="flex-shrink-0">
      <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-gray-200">
        <Image
          src={review.image || "/placeholder.svg"}
          alt={`${review.name}'s profile picture`}
          fill
          sizes="80px"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{review.name}</h4>
      <p className="text-gray-600 italic text-enhanced">"{review.review}"</p>
    </div>
  </div>
))

ReviewItem.displayName = "ReviewItem"

const IndicatorDots = memo(({ total, current, onClick }) => (
  <div className="flex justify-center mt-6">
    {[...Array(total)].map((_, index) => (
      <button
        key={index}
        onClick={() => onClick(index)}
        className={`w-3 h-3 mx-1 rounded-full ${current === index ? "bg-blue-600" : "bg-gray-300"}`}
        aria-label={`Go to review ${index + 1}`}
      />
    ))}
  </div>
))

IndicatorDots.displayName = "IndicatorDots"

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1))
  }, [])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (!inView) return

    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [inView, nextSlide])

  return (
    <section id="reviews" className="py-20 section-bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg uppercase tracking-wider text-blue-600 font-semibold mb-3">CUSTOMER REVIEWS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 heading-enhanced">What Our Members Say</h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <ReviewItem review={reviewsData[currentIndex]} isActive={true} />

              <IndicatorDots total={reviewsData.length} current={currentIndex} onClick={goToSlide} />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link href="/reviews">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Read more reviews</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Reviews

