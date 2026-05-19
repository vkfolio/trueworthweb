import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      phoneRef.current,
      { opacity: 0, y: 60, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
      '-=0.6'
    )

    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Soft pastel background wash for light mode */}
      <div
        className="absolute inset-0 z-[0] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(99,102,241,0.10) 0%, rgba(167,139,250,0.06) 40%, rgba(255,255,255,0) 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 glass-surface px-4 py-1.5 rounded-full mb-6 opacity-0"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#6E6E73]">
                Now on the App Store
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-[clamp(32px,5vw,56px)] font-medium tracking-[-0.02em] leading-[1.1] text-[#1D1D1F] mb-6 opacity-0"
            >
              Your Entire Financial Life,{' '}
              <span className="text-gradient">Uncompromised.</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-[16px] md:text-[18px] text-[#6E6E73] leading-[1.6] max-w-[500px] mx-auto lg:mx-0 mb-8 opacity-0"
            >
              Track wealth, manage loans, split expenses, and know exactly where you stand. Powered by privacy.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0" id="download">
              <Link to="/" className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
                Download on the App Store
              </Link>
              <Link to="/privacy" className="btn-secondary">
                How we protect your data
              </Link>
            </div>
          </div>

          {/* Right: Real App Screenshot */}
          <div ref={phoneRef} className="relative flex items-center justify-center order-1 lg:order-2 opacity-0">
            <div className="relative w-full max-w-[340px]">
              {/* Phone frame */}
              <div className="relative rounded-[40px] overflow-hidden border-[6px] border-[#1a1a24] shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(99,102,241,0.12)] bg-[#1a1a24]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-[#1a1a24] rounded-b-2xl z-20" />
                {/* Screen */}
                <img
                  src="/images/home_lightmode.webp"
                  alt="TrueWorth App Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Glow behind */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2)_0%,transparent_70%)] scale-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
