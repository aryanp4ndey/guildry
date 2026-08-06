"use client";

import { useState } from "react";
import Link from "next/link";

const menuitems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const navButton = { href: "/#contact", label: "Get Consultation" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-20">
      <nav className="w-full top-0 left-0 z-50 fixed bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <header className="flex flex-col lg:flex-row justify-between items-center my-5 px-6 md:px-32">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/Logo.svg" className="h-8" alt="Guildry Logo" />
            </Link>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-8 h-8 text-black focus:outline-none"
                aria-label="Toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:w-auto mt-2 lg:flex lg:mt-0`}
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
              {menuitems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link block py-2 px-3 text-black rounded lg:bg-transparent lg:p-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <div className="lg:hidden flex items-center justify-center mt-3 gap-4">
                <Link
                  href={navButton.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"
                >
                  <h2 className="text-center text-xl font-normal leading-7">
                    {navButton.label}
                  </h2>
                </Link>
              </div>
            </ul>
          </div>

          <div>
            <div className="hidden lg:flex items-center gap-4">
              <Link
                className="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"
                href={navButton.href}
              >
                <h2 className="text-center text-xl font-normal leading-7">
                  {navButton.label}
                </h2>
              </Link>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
}
