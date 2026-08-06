import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="max-w-[1240px] mx-auto px-4 sm:px-6 my-10">
      <div className="relative flex flex-col-reverse items-center md:flex-row" id="hero">
        <div className="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
          <div className="text-left space-y-3">
            <h1 className="text-5xl font-medium leading-[1.2] md:text-7xl text-center md:text-left tracking-tight">
              Websites That Turn <br /> Visitors Into <br /> Customers.
            </h1>
            <p className="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12 text-zinc-600">
              We design and build premium business websites for local businesses, startups and growing brands.
            </p>
            <div className="w-full justify-center md:justify-start items-center inline-flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-accent hover:bg-black rounded-2xl text-center text-white transition-all text-xl font-normal leading-7">
                Get Free Consultation
              </a>
              <Link href="/portfolio" className="px-8 py-4 bg-transparent hover:bg-zinc-100 rounded-2xl text-center text-black border border-zinc-900 transition-all text-xl font-normal leading-7">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10 justify-center">
          <img src="/pics/hero.svg" alt="Hero Illustration" className="w-full max-w-[500px]" />
        </div>
      </div>
    </section>
  );
}
