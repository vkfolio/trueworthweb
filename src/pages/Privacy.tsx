import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PrismaticLight from '../components/PrismaticLight'

export default function Privacy() {
  return (
    <div className="relative min-h-[100dvh] bg-[#FFFFFF]">
      <Navigation />
      <PrismaticLight intensity={0.4} className="fixed inset-0" />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="glass-card p-8 md:p-12">
            <p className="text-[13px] text-[#86868B] mb-10">Last updated: May 2026</p>
            <h1 className="text-[40px] font-semibold tracking-[-0.01em] text-[#1D1D1F] mb-8">
              Privacy Policy
            </h1>

            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-6">
              TrueWorth is built on a simple principle: <strong className="text-[#1D1D1F]">your financial data is yours alone.</strong> We do not sell your data, serve ads, or share your information with third parties for marketing. This policy explains what data we collect, how we store it, and your rights.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">1. What Data We Collect</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              TrueWorth stores the data <strong className="text-[#1D1D1F]">you explicitly enter</strong> into the app:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#6E6E73] leading-[1.7]">
              <li>Transaction amounts, merchants, dates, and notes</li>
              <li>Account names and balances (bank, investment, etc.)</li>
              <li>Loan details — principal, EMI, interest rate, tenure, lender</li>
              <li>Credit card names, limits, and balances</li>
              <li>Spend categories you create or select</li>
              <li>Family member display names (if you use family sharing)</li>
            </ul>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              We do <strong className="text-[#1D1D1F]">not</strong> collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#6E6E73] leading-[1.7]">
              <li>Your contacts, call history, or SMS messages</li>
              <li>Your location or browsing history</li>
              <li>Bank login credentials or read-only bank access</li>
              <li>Photos (except receipt images you explicitly choose to scan)</li>
            </ul>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">2. How Data Is Stored</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              All data is stored using <strong className="text-[#1D1D1F]">Apple's SwiftData framework</strong> on your device. If you enable iCloud sync:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#6E6E73] leading-[1.7]">
              <li>Data is synchronized via <strong className="text-[#1D1D1F]">Apple CloudKit</strong></li>
              <li>CloudKit encrypts data in transit and at rest on Apple's servers</li>
              <li>We cannot access your CloudKit data — only your Apple ID can</li>
            </ul>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              For family sharing, data is shared through Apple's <strong className="text-[#1D1D1F]">CKShare</strong> mechanism. Only invited family members can access the shared ledger.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">3. AI &amp; On-Device Processing</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              TrueWorth uses on-device Foundation Models (Apple Intelligence) for features like natural language transaction parsing and the AI assistant. <strong className="text-[#1D1D1F]">No transaction data is sent to external AI servers.</strong> All AI processing happens on your iPhone or iPad.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">4. Third Parties</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              TrueWorth does not integrate with any third-party analytics, advertising, or tracking SDKs. We do not share data with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#6E6E73] leading-[1.7]">
              <li>Google, Facebook, or any ad networks</li>
              <li>Analytics providers (Mixpanel, Amplitude, Firebase Analytics, etc.)</li>
              <li>Credit bureaus or financial institutions</li>
            </ul>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              The only external service used is <strong className="text-[#1D1D1F]">Apple CloudKit</strong> for optional iCloud synchronization.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">5. In-App Purchases &amp; Subscriptions</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              Subscriptions are processed through Apple's App Store. We do not collect or store your payment information. Apple handles all billing, and we only receive anonymized subscription status data through Apple's StoreKit.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">6. Data Deletion</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              You can delete all your data at any time:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#6E6E73] leading-[1.7]">
              <li><strong className="text-[#1D1D1F]">Settings → Delete All Data</strong> removes everything locally and from CloudKit</li>
              <li>Uninstalling the app removes local data from your device</li>
              <li>To remove CloudKit data, use <strong className="text-[#1D1D1F]">iPhone Settings → Apple ID → iCloud → Manage Account Storage → TrueWorth</strong></li>
            </ul>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">7. Children's Privacy</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              TrueWorth is not intended for children under 13. We do not knowingly collect data from children under 13.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">8. Changes to This Policy</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-4">
              We may update this policy occasionally. Changes will be posted on this page with an updated date. Significant changes will be notified in-app.
            </p>

            <h2 className="text-[22px] font-semibold text-[#1D1D1F] mt-10 mb-4">9. Contact</h2>
            <p className="text-[16px] text-[#6E6E73] leading-[1.7] mb-6">
              If you have questions about this privacy policy, contact us at{' '}
              <a href="mailto:support@trueworth.vkfolio.com" className="text-[#A78BFA] hover:text-[#6366F1] transition-colors">
                support@trueworth.vkfolio.com
              </a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
