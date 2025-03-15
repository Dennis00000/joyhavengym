import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Programs from "@/components/programs"
import Equipment from "@/components/equipment"
import Reviews from "@/components/reviews"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Joyhaven - Elevate Your Fitness Journey",
  description:
    "In Joyhaven every rep builds your best self! Join our fitness community today and transform your fitness journey with our expert trainers and state-of-the-art facilities.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white" id="main-content">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Equipment />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

