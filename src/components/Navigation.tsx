import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollToFeatures = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('features')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToDownload = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('download')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-[24px] saturate-[1.2] bg-[rgba(255,255,255,0.8)] border-b border-[rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="no-underline flex items-center">
          <img
            src="/images/tw_dark.svg"
            alt="TrueWorth"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            onClick={(e) => { e.preventDefault(); scrollToFeatures() }}
            className="text-[14px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 no-underline"
          >
            Features
          </Link>
          <Link
            to="/privacy"
            className={`text-[14px] font-medium transition-colors duration-200 no-underline ${
              location.pathname === '/privacy' ? 'text-[#1D1D1F]' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
            }`}
          >
            Privacy
          </Link>
          <Link
            to="/support"
            className={`text-[14px] font-medium transition-colors duration-200 no-underline ${
              location.pathname === '/support' ? 'text-[#1D1D1F]' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
            }`}
          >
            Support
          </Link>
          <button
            onClick={scrollToDownload}
            className="btn-primary !py-[8px] !px-[18px] !text-[13px] !font-semibold"
          >
            Get the App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1D1D1F] text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-[24px] saturate-[1.2] bg-[rgba(255,255,255,0.95)] border-b border-[rgba(0,0,0,0.06)] px-6 pb-6 flex flex-col gap-4">
          <button
            onClick={() => { scrollToFeatures(); setMenuOpen(false); }}
            className="text-[14px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors text-left bg-transparent border-none cursor-pointer"
          >
            Features
          </button>
          <Link
            to="/privacy"
            className="text-[14px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors no-underline"
          >
            Privacy
          </Link>
          <Link
            to="/support"
            className="text-[14px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors no-underline"
          >
            Support
          </Link>
          <button
            onClick={() => { scrollToDownload(); setMenuOpen(false); }}
            className="btn-primary !py-[8px] !px-[18px] !text-[13px] !font-semibold w-fit"
          >
            Get the App
          </button>
        </div>
      )}
    </nav>
  )
}
