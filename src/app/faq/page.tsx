"use client";

import { useState } from "react";
import FinalCTA from "@/components/sections/FinalCTA";

const generalFaqs = [
  {
    question: "How long does a typical website build take?",
    answer: "Our standard business website sprint takes 2 to 4 weeks from discovery to official launch. E-commerce platforms and complex web portals typically take 4 to 6 weeks."
  },
  {
    question: "Will my website look good on mobile phones?",
    answer: "Every website we build is mobile-first. Over 70% of web traffic comes from mobile devices, so we ensure sub-second rendering, crisp touch targets, and flawless layout adaptation on modern smartphones."
  },
  {
    question: "Can I update content on the site myself later?",
    answer: "Yes! We integrate an easy-to-use Content Management System (CMS) that allows you to change text, upload images, add new blog posts, or edit prices without needing any coding skills."
  }
];

const techFaqs = [
  {
    question: "Why build with Next.js & React instead of WordPress?",
    answer: "Traditional WordPress sites rely on heavy plugins and bloated php scripts that cause slow page speeds (3-7 seconds) and security vulnerabilities. Our modern stack (Next.js App Router / React / Tailwind) delivers sub-second load speeds (<0.5s), 95+ Core Web Vitals, and bulletproof security."
  },
  {
    question: "How does Guildry help with local Google SEO?",
    answer: "We write clean, semantic HTML5 code, integrate Schema.org structured data, optimize Google Search Console indexing, generate automated sitemaps, and optimize site speed so search engines rank your business higher."
  },
  {
    question: "Can you integrate WhatsApp and booking forms?",
    answer: "Yes! We can add direct one-click WhatsApp chat triggers, appointment calendars, contact forms, or custom lead capture forms linked directly to your email or CRM."
  }
];

const billingFaqs = [
  {
    question: "What are your payment terms?",
    answer: "We work on a standard 50/50 milestone structure: 50% upfront upon signing the agreement to initiate the sprint, and 50% upon final launch approval after full quality testing."
  },
  {
    question: "Are there any hidden recurring fees?",
    answer: "Zero hidden fees. You own your website 100%. Hosting costs are paid directly to top-tier CDN providers (e.g. Vercel) which are often free or under $10/mo depending on traffic."
  },
  {
    question: "What happens if I need help after the website launches?",
    answer: "Every package comes with included VIP post-launch support (ranging from 1 to 12 months). We also offer monthly care & maintenance retainers if you want us to handle all technical management ongoing."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 rounded-2xl bg-white overflow-hidden transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left font-bold text-zinc-900 flex justify-between items-center gap-4 hover:bg-zinc-50 transition-colors"
      >
        <span className="text-lg">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-accent text-white' : 'text-zinc-600'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed border-t border-zinc-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Got Questions?
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
          Everything You Need <br /><span className="bg-gradient-to-r from-accent via-blue-500 to-indigo-600 bg-clip-text text-transparent">To Know About Guildry.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Transparent answers regarding our engineering process, pricing structures, technology stack, and ongoing support.
        </p>
      </section>

      {/* FAQ Accordion Sections */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <h2 className="text-2xl font-bold text-zinc-900">General & Process</h2>
          </div>
          <div className="space-y-4">
            {generalFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <h2 className="text-2xl font-bold text-zinc-900">Engineering & Performance</h2>
          </div>
          <div className="space-y-4">
            {techFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <h2 className="text-2xl font-bold text-zinc-900">Billing & Ownership</h2>
          </div>
          <div className="space-y-4">
            {billingFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Direct Support Box */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="p-8 md:p-12 bg-zinc-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Have a specific question not listed here?</h3>
            <p className="text-zinc-400 text-sm">Speak directly with a lead developer on WhatsApp — zero sales pressure.</p>
          </div>
          <a 
            href="https://wa.me/917839748337" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-4 bg-accent text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all shrink-0"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
