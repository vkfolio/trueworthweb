import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do I add a loan and track EMIs?',
    answer: 'Go to <strong>Holdings → Add Loan</strong>. Enter the sanctioned amount, outstanding principal, EMI, interest rate, start date, and tenure. TrueWorth automatically calculates your amortization schedule, shows yearly breakdown charts, and tracks how much principal and interest you\'ve paid so far.',
  },
  {
    question: 'How does family sharing work?',
    answer: 'One family member subscribes and creates a shared family ledger. They invite others via a CloudKit share link. Invited members can add and view transactions in the shared ledger without needing their own subscription. Each member still has their own personal ledger too.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. All data is stored locally on your device using SwiftData. If you enable iCloud sync, data is encrypted in transit and at rest via Apple CloudKit. We do not use third-party analytics or ad networks. Read our full <a href="/privacy">Privacy Policy</a>.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Export functionality is on our roadmap. In the meantime, your data is stored in a local SQLite database that you can access through your device\'s Files app (with advanced tools). We plan to add CSV export in a future update.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'Subscriptions are managed through Apple. Go to <strong>iPhone Settings → Apple ID → Subscriptions → TrueWorth</strong> and select Cancel Subscription. Your data remains on your device even after cancellation.',
  },
  {
    question: 'How do I log a bank interest rate change?',
    answer: 'Open any loan, scroll to the <strong>Rate History</strong> card, and tap <strong>Log change</strong>. Enter the new rate and effective date. TrueWorth updates the amortization schedule and keeps a history of all rate changes for reference.',
  },
  {
    question: 'Why are my recurring transactions not generating?',
    answer: 'Recurring transactions run when you open the app and the due date has passed. Make sure you\'ve set a <strong>Next run date</strong> and <strong>Frequency</strong> (weekly/monthly/yearly) in the Recurring Templates screen. The app needs to be opened at least once after the due date for generation to trigger.',
  },
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="glass-surface rounded-2xl mb-3 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]"
      onClick={onToggle}
      style={{
        borderLeft: isOpen ? '2px solid #6366F1' : '2px solid transparent',
      }}
    >
      <div className="flex justify-between items-center p-5 md:p-6">
        <span className="text-[16px] font-medium text-[#1D1D1F] pr-4">{item.question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-[#6E6E73] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div
          className="px-5 md:px-6 pb-5 md:pb-6 text-[15px] text-[#6E6E73] leading-[1.7]"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  )
}

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="relative min-h-[100dvh] bg-[#FFFFFF]">
      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-[40px] font-semibold tracking-[-0.01em] text-[#1D1D1F] mb-4">
              Support
            </h1>
            <p className="text-[17px] text-[#6E6E73]">
              Find answers to common questions below, or reach out to us directly.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mb-6">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Contact Box */}
          <div className="glass-card p-8 md:p-10 text-center">
            <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-2">
              Still need help?
            </h3>
            <p className="text-[15px] text-[#6E6E73] mb-6">
              We typically respond within 48 hours.
            </p>
            <a href="mailto:support@trueworth.vkfolio.com" className="btn-primary inline-flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email support@trueworth.vkfolio.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
