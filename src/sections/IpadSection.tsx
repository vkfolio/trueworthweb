import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function IpadSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const ipad1Ref = useRef<HTMLDivElement>(null)
  const ipad2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ipad1Ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ipad1Ref.current,
            start: 'top 85%',
          },
        }
      )
      gsap.fromTo(
        ipad2Ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: ipad2Ref.current,
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 bg-[#FFFFFF] py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#6366F1] mb-4 block">
            On every Apple device
          </span>
          <h2 className="text-[36px] md:text-[40px] font-semibold tracking-[-0.01em] text-[#1D1D1F] mb-4">
            Beautifully made for iPad.
          </h2>
          <p className="text-[17px] text-[#6E6E73] max-w-[600px] mx-auto">
            The same private, on-device experience — with a layout that uses every pixel of your iPad.
          </p>
        </div>

        {/* iPad mockups */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div ref={ipad1Ref} className="opacity-0">
            <IpadFrame src="/images/ipad_home.webp" alt="TrueWorth on iPad — Home" />
            <p className="text-center text-[14px] text-[#6E6E73] mt-6">
              Dashboard at a glance — net worth, AI summary, and your monthly flows.
            </p>
          </div>
          <div ref={ipad2Ref} className="opacity-0">
            <IpadFrame src="/images/ipad_holdings.webp" alt="TrueWorth on iPad — Loan Detail" />
            <p className="text-center text-[14px] text-[#6E6E73] mt-6">
              Loan intelligence with rate history and a built-in prepayment simulator.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function IpadFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="relative rounded-[24px] overflow-hidden border-[10px] border-[#1a1a24] shadow-[0_30px_80px_rgba(0,0,0,0.18),0_0_60px_rgba(99,102,241,0.08)] bg-[#1a1a24]">
        <img src={src} alt={alt} className="w-full h-auto object-cover block" />
      </div>
      {/* Soft glow behind */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)] scale-110 pointer-events-none" />
    </div>
  )
}
