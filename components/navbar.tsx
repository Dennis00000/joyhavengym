"use client"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
}

const NavLink = memo(({ link, pathname }) => (
  <Link
    href={link.href}
    className={`text-white hover:text-blue-300 transition-colors duration-200 text-base font-medium py-2 ${
      pathname === link.href ? "border-b-2 border-white" : ""
    }`}
  >
    {link.name}
  </Link>
))

NavLink.displayName = "NavLink"

const MobileNavLink = memo(({ link, pathname, onClick }) => (
  <Link
    href={link.href}
    className={`text-white hover:text-blue-300 transition-colors duration-200 py-2 text-lg font-medium ${
      pathname === link.href ? "border-l-4 border-white pl-2" : ""
    }`}
    onClick={onClick}
  >
    {link.name}
  </Link>
))

MobileNavLink.displayName = "MobileNavLink"

const navLinks = [
  { name: "Program", href: "/program" },
  { name: "About", href: "/about" },
  { name: "Equipment", href: "/equipment" },
  { name: "Reviews", href: "/reviews" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    const lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-bg shadow-md" : "navbar-bg"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Joyhaven Home">
          <span className="text-white text-2xl font-bold tracking-wide">JoyHaven</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} pathname={pathname} />
          ))}
          <Link href="/contact">
            <Button className="bg-white text-[#0a1929] hover:bg-gray-100 rounded-full px-8 py-5 font-semibold text-base transition-transform hover:scale-105">
              Contact us
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden navbar-bg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <MobileNavLink key={link.name} link={link} pathname={pathname} onClick={closeMenu} />
              ))}
              <Link href="/contact" onClick={closeMenu}>
                <Button className="bg-white text-[#0a1929] hover:bg-gray-100 rounded-full w-full font-semibold py-5 text-base">
                  Contact us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar

