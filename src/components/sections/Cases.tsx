import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const cards = [
  {
    category: "Gym & Fitness",
    tech: "Next.js + Tailwind",
    title: "High-performance website for a premium fitness club with class booking integration.",
    url: "https://baseline-club.netlify.app/",
  },
  {
    category: "Dental & Healthcare",
    tech: "React + Booking",
    title: "Professional medical website focusing on patient trust and easy appointment scheduling.",
    url: "https://aryandentalclinic.netlify.app/",
  },
  {
    category: "Salon & Spa",
    tech: "Astro + WhatsApp",
    title: "Luxury beauty salon portal featuring treatment menus and direct WhatsApp booking.",
    url: "https://aryansalon.vercel.app/",
  },
];

export default function Cases() {
  return (
    <section id="portfolio" className="max-w-[1240px] mx-auto px-4 sm:px-6 my-20">
      <SectionTitle
        sectionTitle="Case Studies"
        description="Explore our recent production builds and see how we help businesses stand out."
      />
      <div className="rounded-[45px] bg-dark text-gray p-8 sm:p-[60px]">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
          {cards.map((card, idx) => (
            <div key={idx} className={`${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""} flex flex-col justify-between space-y-6`}>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-xs bg-accent text-white px-3 py-1 rounded-full font-medium">{card.category}</span>
                  <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">{card.tech}</span>
                </div>
                <p className="text-base text-gray leading-relaxed">{card.title}</p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline font-medium text-sm"
                >
                  <span>Learn more</span>
                  <img src="/icon3.svg" alt="Arrow" className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
