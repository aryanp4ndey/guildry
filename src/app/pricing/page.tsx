import FinalCTA from "@/components/sections/FinalCTA";

const plans = [
  {
    name: "Starter Launch",
    price: "₹49,999",
    period: "One-Time Investment",
    description: "Ideal for new local businesses & startups wanting a clean, high-speed online presence.",
    highlight: false,
    features: [
      "Up to 5 Pages (Home, About, Services, Contact, etc.)",
      "Sub-second load time guarantee (<0.8s)",
      "Mobile-first responsive design",
      "WhatsApp & Direct Call Click-to-Action buttons",
      "Basic Google Maps & Local SEO setup",
      "1 Month Free Post-Launch Tech Support",
      "Full CMS access for easy text edits"
    ],
    cta: "Get Started"
  },
  {
    name: "Business Growth",
    badge: "Most Popular",
    price: "₹99,999",
    period: "One-Time Investment",
    description: "Built for established businesses (Gyms, Clinics, Restaurants) ready to scale online leads.",
    highlight: true,
    features: [
      "Up to 10 Bespoke Custom Designed Pages",
      "Interactive Appointment / Class Booking Engine",
      "Sub-second load speed (<0.5s Core Web Vitals)",
      "Advanced Schema.org & Local SEO Optimization",
      "Custom Lead Capture Forms with Webhooks",
      "Google Analytics & Conversion Heatmaps Setup",
      "3 Months VIP Support & Maintenance"
    ],
    cta: "Scale Your Business"
  },
  {
    name: "Enterprise & Portal",
    price: "₹1,49,999",
    period: "One-Time Investment",
    description: "For high-volume brands needing e-commerce, custom web apps, or custom integrations.",
    highlight: false,
    features: [
      "Unlimited Custom Pages & Content Modules",
      "Full E-Commerce / Online Payment Integration",
      "Razorpay, Stripe & Instant UPI Gateway",
      "High-Performance Custom Animations & Micro-Interactions",
      "Custom Database Integration & Customer Portal",
      "1 Year Full Maintenance & SLA Support",
      "24/7 Priority Emergency WhatsApp Line"
    ],
    cta: "Get Custom Quote"
  }
];

const addons = [
  {
    title: "Monthly Security & Care Retainer",
    price: "₹4,999 / mo",
    description: "Continuous hosting management, weekly cloud backups, security patches, and 2 hours of monthly content edits."
  },
  {
    title: "Organic SEO & Local Dominance",
    price: "₹14,999 / mo",
    description: "Monthly blog publishing, local citation updates, keyword rank tracking, and Google Business Profile optimization."
  },
  {
    title: "Speed & Conversion Audit",
    price: "₹9,999 (One-Time)",
    description: "Deep-dive diagnostic of your current site with actionable recommendations to fix speed bottlenecks and drop-offs."
  }
];

export default function PricingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Zero Hidden Fees
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
          Transparent Pricing <br /><span className="bg-gradient-to-r from-accent via-blue-500 to-indigo-600 bg-clip-text text-transparent">Engineered for ROI.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Invest in a website that pays for itself. Choose a package tailored to your stage of business, with fixed pricing and clear deliverables.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`flex flex-col justify-between p-8 md:p-10 rounded-3xl border transition-all duration-300 relative ${
                plan.highlight 
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>

                <div className="mb-8 pb-6 border-b border-zinc-200/20">
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{plan.price}</div>
                  <div className={`text-xs mt-1 font-medium ${plan.highlight ? 'text-accent' : 'text-zinc-400'}`}>{plan.period}</div>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-zinc-400">Included Features</h4>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlight ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                      }`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className={plan.highlight ? 'text-zinc-200' : 'text-zinc-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a 
                  href="/#contact" 
                  className={`w-full py-4 text-center rounded-2xl font-bold transition-all block ${
                    plan.highlight 
                      ? 'bg-accent text-white hover:bg-white hover:text-black shadow-lg' 
                      : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Addons */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Optional Care & Growth Add-Ons</h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">Keep your digital storefront backed by proactive maintenance and marketing support.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {addons.map((addon) => (
            <div key={addon.title} className="p-8 bg-white border border-zinc-200 rounded-3xl hover:border-zinc-300 transition-all space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">{addon.title}</h3>
              <div className="text-2xl font-extrabold text-accent">{addon.price}</div>
              <p className="text-zinc-600 text-sm leading-relaxed">{addon.description}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
