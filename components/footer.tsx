import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-bg py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Joyhaven Fitness</h3>
            <p className="text-gray-300 mb-4">
              Where every rep builds your best self. Join our community and transform your fitness journey today.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/program" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Group Fitness
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Yoga & Meditation
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Cycling Club
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Personal Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">dennisopoola@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">+370-000-00000</span>
              </div>
              <address className="text-gray-300 not-italic">
                123 Fitness Avenue
                <br />
                Vilnius, 045778
                <br />
                Lithuania
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {currentYear} Joyhaven Fitness. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

