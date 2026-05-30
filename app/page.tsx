export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Overpaying for{" "}
          <span className="text-[#58a6ff]">Prescriptions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          RxTracker monitors prescription drug prices across every major pharmacy and alerts you the moment a cheaper option appears — so you never overpay again.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Saving — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["$1,200+", "avg. annual savings"],
            ["50,000+", "pharmacies tracked"],
            ["Real-time", "price alerts"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Track unlimited medications",
              "Compare prices at 50,000+ pharmacies",
              "Instant email & SMS price alerts",
              "Price history charts",
              "Generic & alternative suggestions",
              "GoodRx coupon integration"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Which pharmacies does RxTracker monitor?",
              "We track prices at CVS, Walgreens, Rite Aid, Costco, Walmart, Kroger, and thousands of independent pharmacies — over 50,000 locations nationwide."
            ],
            [
              "How quickly will I be notified of a price drop?",
              "Our system checks prices every few hours. When a lower price is detected for any of your tracked medications, you'll receive an email or SMS alert within minutes."
            ],
            [
              "Can I cancel my subscription at any time?",
              "Yes. You can cancel anytime from your account dashboard with no questions asked. You'll retain access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} RxTracker. All rights reserved.
      </footer>
    </main>
  );
}
