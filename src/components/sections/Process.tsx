"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    index: "01",
    title: "Discovery Call",
    description: "We start by understanding your business, your goals, and your target audience. We'll discuss your vision and gather requirements to ensure we build a website that delivers results."
  },
  {
    index: "02",
    title: "Wireframe",
    description: "Before diving into design, we create a structural layout of your website. This ensures the user journey is intuitive and all necessary information is logically organized."
  },
  {
    index: "03",
    title: "Design",
    description: "Our designers craft a premium, visually stunning interface tailored to your brand. We focus on modern aesthetics, typography, and beautiful micro-interactions."
  },
  {
    index: "04",
    title: "Development",
    description: "Our developers bring the design to life using modern tech stacks. We ensure lightning-fast performance, responsive layouts, and clean code."
  },
  {
    index: "05",
    title: "Launch",
    description: "After rigorous testing across devices and browsers, we deploy your new website. We handle all technical aspects to ensure a smooth transition."
  },
  {
    index: "06",
    title: "Support",
    description: "Our relationship doesn't end at launch. We provide ongoing maintenance, updates, and support to ensure your website continues to perform optimally."
  }
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="process" className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-[140px]">
      <SectionTitle
        sectionTitle="Our Working Process"
        description="A transparent, step-by-step guide to how we build your premium website from start to finish."
      />
      <div className="space-y-6">
        {steps.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.index}
              className={`rounded-[45px] border border-dark p-8 md:p-10 transition-all duration-300 shadow-[0px_5px_0px_#191a23] ${
                isOpen ? "bg-accent text-white" : "bg-gray text-black"
              }`}
            >
              <div
                onClick={() => toggleItem(idx)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-5xl font-medium">{item.index}</span>
                  <h3 className="text-xl md:text-3xl font-medium">{item.title}</h3>
                </div>
                <button 
                  className={`w-12 h-12 rounded-full border border-black flex items-center justify-center text-2xl font-bold transition-transform ${
                    isOpen ? "rotate-180 bg-white text-black" : "bg-white text-black"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </button>
              </div>

              {isOpen && (
                <div className="mt-6 pt-6 border-t border-black/20 text-base md:text-lg leading-relaxed">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
