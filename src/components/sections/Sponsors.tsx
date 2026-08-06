const logos = [
  { name: "Amazon", src: "/company/company-logo1.svg" },
  { name: "Dribbble", src: "/company/company-logo2.svg" },
  { name: "Hubspot", src: "/company/company-logo3.svg" },
  { name: "Notion", src: "/company/company-logo4.svg" },
  { name: "Netflix", src: "/company/company-logo5.svg" },
  { name: "Zoom", src: "/company/company-logo6.svg" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="max-w-[1240px] mx-auto px-4 sm:px-6 my-12">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-wrap items-center justify-between w-full gap-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center p-2">
              <img src={logo.src} alt={logo.name} className="h-9 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
