import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

interface LayoutProps {
  children: ReactNode
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

const Layout = ({ children, theme, toggleTheme }: LayoutProps) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white dark:bg-dark shadow-md">
        <nav className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              Dattatray Shendkar
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'hover:text-primary transition-colors'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-lighter transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <FaMoon className="w-5 h-5" />
                ) : (
                  <FaSun className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6 text-primary" />
                ) : (
                  <FaBars className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block ${
                    location.pathname === item.path
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 dark:text-white hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} // close on click
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="mt-2 p-2 rounded-full bg-gray-100 dark:bg-dark-lighter"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow container py-8">{children}</main>

      <footer className="bg-white dark:bg-dark shadow-inner">
        <div className="container py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Dattatray Shendkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
