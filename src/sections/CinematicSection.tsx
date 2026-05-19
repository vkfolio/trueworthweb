import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !mediaRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      // Phase 1: The Rise
      gsap.fromTo(
        sectionRef.current,
        { yPercent: 50 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top 30%',
            scrub: true,
          },
        }
      )

      // Phase 2: The Enclosure
      gsap.fromTo(
        mediaRef.current,
        { scale: 0.85, yPercent: 10, borderRadius: '40px' },
        {
          scale: 1,
          yPercent: 0,
          borderRadius: '0px',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 30%',
            end: 'top top',
            scrub: true,
          },
        }
      )

      // Phase 3: Text Overlay
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=50%',
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-[250vh]"
    >
      <div
        ref={mediaRef}
        className="sticky top-0 w-full h-[100dvh] overflow-hidden"
        style={{ borderRadius: '40px' }}
      >
        {/* Background Image */}
        <img
          src="/images/corridor.webp"
          alt="Secure Data Vault"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light overlay for text legibility */}
        <div className="absolute inset-0 bg-white/40" />

        {/* Text Overlay */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <div className="text-center px-6">
            <h2
              className="text-[clamp(32px,6vw,72px)] font-medium tracking-[-0.02em] leading-[1.1] text-[#1D1D1F]"
              style={{
                textShadow: '0 2px 24px rgba(255,255,255,0.6)',
              }}
            >
              Your Data.
              <br />
              Your Device.
              <br />
              No Exceptions.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
