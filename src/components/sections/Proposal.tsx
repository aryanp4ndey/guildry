import Card from "../ui/Card";

export default function Proposal() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6">
      <Card>
        <div className="flex bg-[#F3F3F3] rounded-[45px] p-[60px] relative mt-[123px] mb-[163px]">
          <div className="w-full md:w-[50%] lg:w-[40%] flex flex-col gap-[26px]">
            <h2 className="text-3xl font-medium">Let's make things happen</h2>
            <p className="text-zinc-700">
              Contact us today to learn more about how our digital marketing and web engineering services can help your business grow and succeed online.
            </p>
            <div>
              <a href="#contact" className="btn-primary">
                Get your free proposal
              </a>
            </div>
          </div>
          <picture className="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[450px] items-center justify-center">
            <img
              src="/pics/proposal-pic.png"
              alt="Proposal Illustration"
              className="hidden md:flex lg:h-full lg:w-auto object-contain"
            />
          </picture>
        </div>
      </Card>
    </section>
  );
}
