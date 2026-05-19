import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,0,0,0.08)] bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* CTA */}
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-semibold tracking-[-0.01em] text-[#1D1D1F] mb-6">
            Take control today.
          </h2>
          <Link to="/" className="btn-primary inline-flex">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20"/>
            </svg>
            Download on the App Store
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[rgba(0,0,0,0.08)]">
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[14px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link to="/support" className="text-[14px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors no-underline">
              Support
            </Link>
          </div>
          <div className="text-[13px] text-[#86868B]">
            &copy; 2026 TrueWorth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
