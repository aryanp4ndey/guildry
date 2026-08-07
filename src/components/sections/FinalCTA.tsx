import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="contact" className="my-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-zinc-900 rounded-[45px] overflow-hidden relative py-20 px-8 md:px-20 text-center border border-zinc-800 shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Let's Build Something Amazing Together.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Stop losing customers to outdated websites. Partner with Guildry to build a premium online experience that grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="mailto:aryanp4ndey@gmail.com" 
              className="px-8 py-4 bg-accent text-white font-medium rounded-2xl hover:bg-white hover:text-black transition-all w-full sm:w-auto text-lg"
            >
              Book Free Consultation
            </a>
            <a 
              href="https://wa.me/917839748337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-medium rounded-2xl hover:bg-white hover:text-black transition-all w-full sm:w-auto text-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
