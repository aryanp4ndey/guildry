import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["700", "800"] });

const links = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <section className="sm:px-5">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="px-[15px] bg-dark text-gray py-[55px] lg:px-[60px] sm:rounded-t-[45px]">
          <div>
            <div className="flex flex-col lg:flex-row gap-7 items-center justify-between">
              <Link href="/" className={`${inter.className} font-inter text-3xl font-bold text-white tracking-tight`}>
                Guildry<span className="text-accent">.</span>
              </Link>
              <ul className="flex flex-col sm:flex-row gap-5">
                {links.map((link) => (
                  <li key={link.href} className="text-center">
                    <Link href={link.href} className="underline text-gray hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">Twitter</a>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-[66px] mb-[51px]">
              <div className="flex text-center lg:text-start flex-col w-full lg:w-[30%]">
                <h3 className="mb-5 text-center md:text-left text-2xl text-accent font-medium">Contact us</h3>
                <div className="flex flex-col justify-between gap-4 text-gray text-sm">
                  <span>Email: hello@guildry.com</span>
                  <span>Phone: +91 98765 43210</span>
                  <span className="lg:w-3/4">Address: Gomti Nagar, Lucknow, UP, India</span>
                </div>
              </div>
              <div className="flex-grow my-10 lg:my-0 lg:ml-12">
                <form className="bg-[#292A32] px-10 py-14 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center">
                  <div className="w-full sm:w-[55%]">
                    <input
                      type="text"
                      placeholder="Email"
                      className="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none text-white border-zinc-600"
                    />
                  </div>
                  <button type="submit" className="w-full sm:w-[45%] btn-tertiary">
                    Subscribe to news
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-gray mb-5"></div>
          <div className="flex flex-col lg:flex-row h-20 justify-center mt-4 text-center md:justify-between md:mt-0 text-sm text-gray">
            <span>&copy; {new Date().getFullYear()} Guildry. All rights reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
