import FinalCTA from "@/components/sections/FinalCTA";

const services = [
  {
    badge: "Most Popular",
    title: "High-Performance Business Websites",
    tagline: "Turn your business into an authoritative market leader with a bespoke, lightning-fast digital storefront.",
    deliverables: [
      "Custom responsive UI/UX tailored to your brand",
      "Sub-second page load optimization (<0.5s time-to-interactive)",
      "Built-in local SEO & schema metadata optimization",
      "Content Management System (CMS) for easy self-editing",
      "WhatsApp, Call & Contact Form integrations"
    ],
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    idealFor: "Gyms, Clinics, Restaurants, Salons, Real Estate Agencies, Professional Services"
  },
  {
    badge: "High Conversion",
    title: "High-Converting Sales & Lead Pages",
    tagline: "Dedicated, ultra-optimized single pages built specifically to turn ad clicks and traffic into paying customers.",
    deliverables: [
      "Conversion-focused visual hierarchy & copy structure",
      "A/B test ready section layout architecture",
      "Instant lead capture with webhooks & CRM connectivity",
      "Dynamic interactive calculators & multi-step forms",
      "Mobile-first touch target and UX design"
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel Analytics"],
    idealFor: "Ad Campaigns, Product Launches, Event Bookings, Special Offers"
  },
  {
    badge: "Scale Revenue",
    title: "E-Commerce & Interactive Portals",
    tagline: "Sell products, manage subscriptions, or allow customers to book paid appointments seamlessly.",
    deliverables: [
      "Custom product catalogs & friction-free checkout flows",
      "Razorpay, Stripe & UPI payment gateway integration",
      "Inventory tracking & automated email invoice triggers",
      "Customer portal & account management",
      "Bank-grade SSL security & data encryption"
    ],
    tech: ["Stripe / Razorpay", "Next.js", "Tailwind CSS", "Supabase"],
    idealFor: "E-Commerce Brands, Coaching Institutes, Course Creators, Service Bookings"
  },
  {
    badge: "Growth Engine",
    title: "Speed & Technical SEO Overhaul",
    tagline: "Rescue slow, lagging legacy sites and propel them to top Google rankings with clean code architecture.",
    deliverables: [
      "Core Web Vitals 95+ performance guarantee",
      "Google Search Console & Schema.org structured data",
      "Image optimization & automated WebP generation",
      "Clean semantic HTML5 structure & accessibility audit",
      "Domain migration & zero 404 redirect planning"
    ],
    tech: ["Lighthouse", "Google Schema", "Cloudflare Edge", "PostCSS"],
    idealFor: "Outdated WordPress Sites, Slow Wix/Squarespace Stores, Local Business Searches"
  }
];

const comparison = [
  { feature: "Page Load Speed", guildry: "Under 0.8 Seconds (Core Web Vitals 95+)", generic: "3 - 7 Seconds (Slow WordPress)" },
  { feature: "Design Standard", guildry: "Handcrafted, Modern SaaS aesthetic (Apple/Linear inspired)", generic: "Pre-made $20 generic templates" },
  { feature: "Code Quality", guildry: "Clean semantic code, zero bloat", generic: "Heavy plugins & vulnerable scripts" },
  { feature: "Conversion Focus", guildry: "Strategic UI engineered for maximum leads", generic: "Just pretty pictures with no strategy" },
  { feature: "Mobile Experience", guildry: "Mobile-first native-app feel", generic: "Awkward responsive desktop hacks" },
  { feature: "Support & SLA", guildry: "Direct WhatsApp support with <1hr response", generic: "Unresponsive email ticket queue" }
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Capabilities & Solutions
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
          Engineered Websites That <span className="bg-gradient-to-r from-accent via-blue-500 to-indigo-600 bg-clip-text text-transparent">Scale Revenue.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          We build bespoke digital storefronts for growing businesses. Zero bloatware, sub-second speeds, and world-class design crafted to position your brand above the competition.
        </p>
      </section>

      {/* Services Detailed Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div key={service.title} className="p-8 md:p-12 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-all grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-zinc-900 text-white rounded-full">
                  {service.badge}
                </span>
                <span className="text-sm font-semibold text-zinc-400">Module 0{index + 1}</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
                {service.title}
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {service.tagline}
              </p>

              <div className="pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Key Deliverables</h4>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Ideal Industry Focus</h4>
                <p className="text-sm text-zinc-700 font-medium">{service.idealFor}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Engineered With</h4>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white border border-zinc-200 rounded-lg text-xs font-semibold text-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <a href="/#contact" className="w-full py-3.5 px-6 bg-accent text-white font-medium rounded-xl hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-2">
                  <span>Request Proposal</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">The Guildry Difference</h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">See how our engineering approach outperforms traditional template agencies.</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="p-6 text-sm font-bold uppercase text-zinc-400">Feature</th>
                <th className="p-6 text-sm font-bold uppercase text-accent bg-accent/5">Guildry Engineering</th>
                <th className="p-6 text-sm font-bold uppercase text-zinc-400">Generic Template Agencies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {comparison.map((row) => (
                <tr key={row.feature} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 font-semibold text-zinc-900">{row.feature}</td>
                  <td className="p-6 font-semibold text-accent bg-accent/5">{row.guildry}</td>
                  <td className="p-6 text-zinc-500">{row.generic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
