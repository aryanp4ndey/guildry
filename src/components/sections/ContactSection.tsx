"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

export default function ContactSection() {
  const [isQuote, setIsQuote] = useState(false);
  const [message, setMessage] = useState("");

  const handleOptionChange = (quote: boolean) => {
    setIsQuote(quote);
    if (quote) {
      setMessage("We're interested in your services! Please contact us");
    } else {
      setMessage("");
    }
  };

  return (
    <section id="contact" className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-[140px] relative mt-[140px]">
      <SectionTitle
        sectionTitle="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing & Web Needs"
      />

      <div className="flex relative justify-start items-center p-8 sm:p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden">
        <form className="bg-gray sm:p-6 h-full w-full lg:max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-6">
            <div className="flex items-center gap-[14px]">
              <input
                type="radio"
                id="checkbox1"
                name="contactType"
                checked={!isQuote}
                onChange={() => handleOptionChange(false)}
                className="w-6 h-6 accent-accent cursor-pointer"
              />
              <label htmlFor="checkbox1" className="text-black cursor-pointer font-medium">Say Hi</label>
            </div>
            <div className="flex items-center gap-[14px]">
              <input
                type="radio"
                id="checkbox2"
                name="contactType"
                checked={isQuote}
                onChange={() => handleOptionChange(true)}
                className="w-6 h-6 accent-accent cursor-pointer"
              />
              <label htmlFor="checkbox2" className="flex items-center text-black cursor-pointer font-medium">Get a Quote</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-black mb-2 font-medium">Name*</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none bg-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-2 font-medium">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none bg-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-black mb-2 font-medium">Message*</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows={4}
              className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none bg-white"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full text-lg">Send Message</button>
        </form>

        <picture className="absolute right-[-15%] top-[2%] bottom-[2%] hidden lg:block">
          <img src="/pics/contact-pic.png" alt="Contact Illustration" className="h-full w-auto object-contain" />
        </picture>
      </div>
    </section>
  );
}
