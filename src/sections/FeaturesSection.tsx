import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: 'Net Worth Dashboard',
    description: 'See your complete picture. Real-time calculation across all accounts, investments, and liabilities.',
    image: '/images/home.PNG',
    alt: 'TrueWorth Net Worth Dashboard',
  },
  {
    title: 'Loan Intelligence',
    description: 'Visualize amortization, simulate prepayments, and log interest rate changes with precision.',
    image: '/images/loan.PNG',
    alt: 'TrueWorth Loan Intelligence',
  },
  {
    title: 'Family Ledger',
    description: 'One subscription covers your household. Seamlessly share ledgers via CloudKit.',
    image: '/images/ledger.PNG',
    alt: 'TrueWorth Family Ledger',
  },
  {
    title: 'AI Assistant',
    description: 'Ask questions in plain English. All processing happens on-device. Nothing leaves your phone.',
    image: '/images/ai.PNG',
    alt: 'TrueWorth AI Assistant',
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return

    const triggers: ScrollTrigger[] = []

    const featureBlocks = sectionRef.current.querySelectorAll('.feature-block-scroll')
    featureBlocks.forEach((block, index) => {
      const st = ScrollTrigger.create({
        trigger: block,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      })
      triggers.push(st)
    })

    return () => {
      triggers.forEach((st) => st.kill())
    }
  }, [])

  const currentFeature = features[activeIndex] ?? features[0]

  return (
    <section ref={sectionRef} id="features" className="relative z-10 bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 pt-20">
          <h2 className="text-[36px] md:text-[40px] font-semibold tracking-[-0.01em] text-[#1D1D1F] mb-4">
            Everything you need to master your money
          </h2>
          <p className="text-[17px] text-[#6E6E73] max-w-[600px] mx-auto">
            From tracking daily expenses to monitoring a 20-year home loan — TrueWorth handles it all.
          </p>
        </div>

        {/* Sticky Layout */}
        <div className="relative lg:min-h-[300vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Scrolling Text */}
            <div className="space-y-[40vh] lg:space-y-[80vh]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-block-scroll min-h-[60vh] lg:min-h-[80vh] flex items-center transition-all duration-500"
                >
                  <div
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? 'scale-100 opacity-100'
                        : 'scale-95 opacity-40'
                    }`}
                  >
                    <span className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#6366F1] mb-4 block">
                      0{index + 1}
                    </span>
                    <h3 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.01em] text-[#1D1D1F] mb-4 leading-[1.2]">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] text-[#6E6E73] leading-[1.6] max-w-[400px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Sticky Phone with single switching image */}
            <div className="hidden lg:block lg:h-full">
              <div className="sticky top-[15vh] h-[70vh] flex items-center justify-center">
                <div className="relative w-full max-w-[300px]">
                  {/* Phone frame */}
                  <div className="relative rounded-[36px] overflow-hidden border-[5px] border-[#1a1a24] shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(99,102,241,0.12)] bg-[#1a1a24]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-[#1a1a24] rounded-b-xl z-20" />
                    {/* Single image that changes */}
                    <img
                      key={activeIndex}
                      src={currentFeature.image}
                      alt={currentFeature.alt}
                      className="w-full h-auto object-cover transition-opacity duration-700"
                    />
                  </div>
                  {/* Glow behind */}
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] scale-150 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile: show image inline with each feature */}
            <div className="lg:hidden space-y-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-block-mobile transition-all duration-500 ${
                    activeIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <div className="relative w-full max-w-[260px] mx-auto mt-8">
                    <div className="relative rounded-[28px] overflow-hidden border-[4px] border-[#1a1a24] shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-[#1a1a24]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-[#1a1a24] rounded-b-lg z-20" />
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
