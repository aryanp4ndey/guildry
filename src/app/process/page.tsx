import FinalCTA from "@/components/sections/FinalCTA";

const steps = [
  {
    step: "01",
    name: "Discovery & Growth Strategy",
    duration: "Day 1 - 3",
    summary: "We dive deep into your business goals, target customer profiles, local competitors, and unique value propositions.",
    details: [
      "Target customer & buyer persona analysis",
      "Competitive website & SEO audit",
      "Site map architecture & conversion goal definition",
      "Content & brand asset collection"
    ]
  },
  {
    step: "02",
    name: "UX Wireframing & Conversion Flow",
    duration: "Day 4 - 7",
    summary: "Designing the blueprint for seamless user navigation, intuitive touch targets, and strategic Call-To-Action positioning.",
    details: [
      "Low-fidelity interactive wireframes",
      "Information architecture layout",
      "Mobile-first navigation flow optimization",
      "Lead form & WhatsApp funnel planning"
    ]
  },
  {
    step: "03",
    name: "High-Fidelity UI Design",
    duration: "Day 8 - 14",
    summary: "Crafting a stunning, modern SaaS-grade visual design tailored specifically to position your brand as an industry leader.",
    details: [
      "Bespoke Figma UI component design",
      "Modern typography & electric accent color hierarchy",
      "Interactive button & micro-animation states",
      "Client revision rounds & visual sign-off"
    ]
  },
  {
    step: "04",
    name: "Modern Engineering & Speed Optimization",
    duration: "Day 15 - 21",
    summary: "Translating designs into clean, sub-second loading code with Next.js App Router, React, and Tailwind CSS.",
    details: [
      "Clean, semantic HTML5 & modular component build",
      "Lighthouse 95+ performance optimization & WebP images",
      "Local SEO & Schema structured data integration",
      "Cross-browser & multi-device responsiveness testing"
    ]
  },
  {
    step: "05",
    name: "Quality Assurance & Launch",
    duration: "Day 22 - 25",
    summary: "Rigorous pre-launch audit followed by seamless deployment to high-speed global Vercel Edge CDN servers.",
    details: [
      "Form submission & lead integration testing",
      "SSL security certificate setup",
      "Domain DNS pointing & zero-downtime cutover",
      "Google Search Console & Analytics indexing submission"
    ]
  },
  {
    step: "06",
    name: "Ongoing Support & Scaling",
    duration: "Post-Launch",
    summary: "We don't disappear after launch. We provide dedicated support to keep your site fast, secure, and converting.",
    details: [
      "CMS video training for self-management",
      "Monthly performance & security audits",
      "Priority WhatsApp technical support line",
      "Continuous feature iterations as your business grows"
    ]
  }
];

const guarantees = [
  {
    title: "100% On-Time Delivery Guarantee",
    description: "We commit to strict sprint deadlines. If we miss our agreed launch date, your final invoice is discounted by 20%."
  },
  {
    title: "Zero Hidden Costs",
    description: "Our pricing is transparent and fixed upfront. No unexpected hourly charges or surprise plugin fees."
  },
  {
    title: "Direct Engineer Access",
    description: "No account manager middlemen. You get a dedicated lead developer accessible on WhatsApp throughout the sprint."
  }
];

export default function ProcessPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Transparent Execution
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
          From Strategy to Launch <br /><span className="bg-gradient-to-r from-accent via-blue-500 to-indigo-600 bg-clip-text text-transparent">In 4 Weeks or Less.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Our structured 6-phase sprint pipeline eliminates guesswork. You get complete transparency, regular progress updates, and a site built right the first time.
        </p>
      </section>

      {/* Step Timeline */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto space-y-12">
        {steps.map((item) => (
          <div key={item.step} className="relative bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 hover:border-zinc-300 transition-all shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-100">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-extrabold text-accent">{item.step}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{item.name}</h2>
              </div>
              <span className="inline-self-start px-4 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-bold rounded-full uppercase tracking-wider">
                ⏱ {item.duration}
              </span>
            </div>

            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              {item.summary}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">Phase Milestones</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {item.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100/80 text-sm font-medium text-zinc-800">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Guarantees Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Our Ironclad Guarantees</h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">Peace of mind built into every contract we sign.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((g) => (
            <div key={g.title} className="p-8 bg-zinc-900 text-white rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold">{g.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
