import Hero from "@/components/sections/Hero";
import Sponsors from "@/components/sections/Sponsors";
import ServicesSection from "@/components/sections/Services";
import Proposal from "@/components/sections/Proposal";
import Cases from "@/components/sections/Cases";
import Process from "@/components/sections/Process";
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <Sponsors />
      <ServicesSection />
      <Proposal />
      <Cases />
      <Process />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
