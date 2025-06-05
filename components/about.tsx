"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 section-bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg uppercase tracking-wider text-blue-600 font-semibold mb-3">ABOUT OUR GYM</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-enhanced">
            Welcome to Joyhaven
            <br />
            Where Every Rep Builds Your Best Self!
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/general/about-our-page.jpg"
              alt="Group fitness class at Joyhaven Gym"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed text-enhanced">
              At Joyhaven, we're dedicated to your holistic fitness journey. Our expert trainers and diverse range of
              classes cater to all levels, ensuring you reach your goals with support every step of the way. Join our
              empowering community and unlock your full potential today!
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-enhanced">
              Joyhaven isn't just a gym; it's a transformative space where progress is celebrated. With personalized
              programs and a supportive atmosphere, we're here to help you thrive in mind and body. Take the first step
              towards a healthier, happier you - join us at Joyhaven.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-enhanced">
              Discover a new level of fitness at Joyhaven. From dynamic workouts to a welcoming community, we provide
              the tools and encouragement you need to succeed. Join us and unleash your strength today!
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                  Learn more about us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

