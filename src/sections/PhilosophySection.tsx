import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return

    const split = new SplitType(textRef.current, { types: 'words' })

    if (split.words) {
      gsap.fromTo(
        split.words,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    return () => {
      split.revert()
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === containerRef.current)
        .forEach((st) => st.kill())
    }
  }, [])

  return (
    <section className="relative z-10 bg-[#FFFFFF] min-h-[60vh] flex items-center justify-center py-32">
      <div ref={containerRef} className="max-w-[900px] mx-auto px-6 text-center">
        <p
          ref={textRef}
          className="philosophy-text text-[clamp(24px,4vw,48px)] font-medium leading-[1.4] tracking-[-0.02em] text-[#1D1D1F]"
        >
          TrueWorth reads your financial landscape and illuminates what actually matters.
        </p>
      </div>
    </section>
  )
}
