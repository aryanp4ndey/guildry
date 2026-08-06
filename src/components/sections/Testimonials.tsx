import clientReviews from "@/data/clientData.json";
import SectionTitle from "../ui/SectionTitle";

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-[1240px] mx-auto px-4 sm:px-6 my-20">
      <SectionTitle
        sectionTitle="Testimonials"
        description="Hear from our satisfied clients about how our websites transformed their business."
      />
      <div className="rounded-[45px] bg-dark p-8 sm:p-14 text-gray">
        <div className="grid md:grid-cols-2 gap-8">
          {clientReviews.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between space-y-6">
              <div className="relative p-8 rounded-[45px] border border-accent bg-dark text-gray">
                <p className="text-base leading-relaxed">"{item.comment}"</p>
              </div>
              <div className="px-6">
                <div className="text-accent font-medium text-lg">{item.name}</div>
                <div className="text-zinc-400 text-sm">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
