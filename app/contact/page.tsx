import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Joyhaven Fitness",
  description: "Get in touch with Joyhaven Fitness. We'd love to hear from you and answer any questions you may have.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" id="main-content">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-enhanced">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-enhanced">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>

          <Contact />

          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-4 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2995081927385!2d25.279138776929146!3d54.687411571963625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sVilnius%2C%20Lithuania!5e0!3m2!1sen!2sus!4v1710432071279!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Joyhaven Gym Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

