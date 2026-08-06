import FinalCTA from "@/components/sections/FinalCTA";

const stats = [
  { label: "Live Websites Deployed", value: "10+" },
  { label: "Avg Mobile Performance", value: "98/100" },
  { label: "Client Conversion Growth", value: "+320%" },
  { label: "Core Web Vitals Speed", value: "<0.4s" }
];

const projects = [
  {
    title: "Compute Platform",
    category: "SaaS & Cloud Tools",
    url: "https://compute-the-platform-to-build-beige-sigma.vercel.app/",
    description: "Cloud infrastructure interface built for seamless developer tooling, compute deployment, and system telemetry.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Tailwind CSS", "Developer Tools", "Vercel"],
    stats: [
      { label: "Load Speed", value: "0.3s" },
      { label: "Conversion Rate", value: "18.4%" }
    ]
  },
  {
    title: "Pulse Analytics Suite",
    category: "SaaS & Analytics",
    url: "https://pulse-template-by-aryan.lovable.app/",
    description: "Modern business analytics suite featuring real-time data tracking, responsive metric dashboards, and clean typography.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Lovable UI", "Tailwind CSS"],
    stats: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "User Engagement", value: "+240%" }
    ]
  },
  {
    title: "Noir Motion Studio",
    category: "Agency & Motion",
    url: "https://noirmotion-portfolio.vercel.app/",
    description: "High-end digital agency & creative studio showcasing slick interactive animations, dark mode elegance, and showreel portfolios.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    stats: [
      { label: "Animation FPS", value: "60 FPS" },
      { label: "Brand Impact", value: "10/10" }
    ]
  },
  {
    title: "Aryan Dental Clinic",
    category: "Dental & Healthcare",
    url: "https://aryandentalclinic.netlify.app/",
    description: "Medical healthcare portal engineered for patient trust, clean clinical aesthetics, and streamlined online booking.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Booking Engine", "Local SEO"],
    stats: [
      { label: "New Patients", value: "+210%" },
      { label: "Bounce Rate", value: "14%" }
    ]
  },
  {
    title: "Aryan Salon & Spa",
    category: "Salons & Beauty",
    url: "https://aryansalon.vercel.app/",
    description: "Luxury salon & spa experience featuring digital treatment menus, package selections, and direct WhatsApp reservation triggers.",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200&auto=format&fit=crop",
    tech: ["Astro", "WhatsApp API", "Tailwind CSS"],
    stats: [
      { label: "Monthly Bookings", value: "350+" },
      { label: "Mobile Speed", value: "0.4s" }
    ]
  },
  {
    title: "Baseline Athletic Club",
    category: "Gyms & Sports",
    url: "https://baseline-club.netlify.app/",
    description: "Premium fitness & sports community hub with class schedules, membership onboarding, and high-energy visuals.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Membership Flow", "Tailwind CSS"],
    stats: [
      { label: "Trial Signups", value: "+310%" },
      { label: "Performance", value: "98/100" }
    ]
  },
  {
    title: "PureZero Eco Products",
    category: "E-Commerce & Sustainable",
    url: "https://purezero.netlify.app/",
    description: "Sleek sustainable brand platform focusing on zero-emission products, clean catalog layouts, and eco-friendly messaging.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "E-Commerce", "Tailwind CSS"],
    stats: [
      { label: "Catalog Speed", value: "0.3s" },
      { label: "Order Growth", value: "+180%" }
    ]
  },
  {
    title: "Design Company Studio",
    category: "Architecture & Design",
    url: "https://design-company-website-1cdcn0tgs-aryanp4ndeyteam.vercel.app/",
    description: "Minimalist architecture & interior design firm showcasing project case studies, client portfolios, and inquiry forms.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    stats: [
      { label: "High-Value Inquiries", value: "65+/mo" },
      { label: "Design Score", value: "10/10" }
    ]
  },
  {
    title: "Laocoon Luxury Fashion",
    category: "Luxury E-Commerce",
    url: "https://laocoon-1ahtdwxv0-aryanp4ndeyteam.vercel.app/",
    description: "Avant-garde luxury fashion storefront with immersive visual storytelling and frictionless product discovery.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Custom CSS", "Vercel"],
    stats: [
      { label: "User Session Time", value: "4m 12s" },
      { label: "Mobile Speed", value: "0.5s" }
    ]
  },
  {
    title: "Jungly Retail Store",
    category: "E-Commerce & Retail",
    url: "https://jungly.vercel.app/",
    description: "Vibrant organic lifestyle & retail store designed for fast product exploration, instant cart checkout, and seamless mobile UX.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Stripe Gateway", "Tailwind CSS"],
    stats: [
      { label: "Checkout Conversion", value: "8.2%" },
      { label: "Lighthouse Speed", value: "97/100" }
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          10 Live Production Websites
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
          Real Projects. <span className="bg-gradient-to-r from-accent via-blue-500 to-indigo-600 bg-clip-text text-transparent">Live Production Sites.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Click any project below to visit the live production website in real-time. Every single site is engineered for sub-second speeds, premium UI, and conversion growth.
        </p>
      </section>

      {/* Metrics Banner */}
      <section className="py-8 bg-zinc-900 text-white mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl md:text-5xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs md:text-sm text-zinc-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.url} className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
              
              <div>
                <div className="relative h-52 overflow-hidden bg-zinc-100 border-b border-zinc-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-zinc-100 text-zinc-700 text-[11px] font-medium rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold text-zinc-900 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-zinc-100 text-xs">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-bold text-zinc-900 text-sm">{s.value}</div>
                        <div className="text-zinc-400 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto flex items-center justify-between">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-zinc-900 text-white hover:bg-accent font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-accent"
                >
                  <span>Visit Live Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
