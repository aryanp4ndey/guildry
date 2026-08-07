"use client";

import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { Crown, ShieldCheck, Compass, Palette, Code2, TrendingUp } from "lucide-react";

const team: Array<{
  initials: string;
  name: string;
  role: string;
  description: string;
  link: string;
  icon: any;
  pic?: string;
}> = [
  {
    initials: "AP",
    name: "Aryan Pandey",
    role: "CEO and Founder",
    description:
      "Passionate tech leader driving strategy, product vision, and digital innovation to transform brands online.",
    link: "https://www.linkedin.com/in/aryanp4ndey",
    icon: Crown,
    pic: "/team/aryan.jpg",
  },
  {
    initials: "AG",
    name: "Ansh Gautam",
    role: "Head of Operations and Finance",
    description:
      "Specializes in financial strategy, operational scaling, and high-performance agency management.",
    link: "https://linkedin.com",
    icon: ShieldCheck,
  },
  {
    initials: "VA",
    name: "Vaidik Agarwal",
    role: "Head of Sales",
    description:
      "Drives business growth, client acquisitions, and strategic sales partnerships to expand operations.",
    link: "https://linkedin.com",
    icon: TrendingUp,
  },
  {
    initials: "AS",
    name: "Atman Singh",
    role: "Head of Strategy and Management",
    description:
      "Focuses on growth operations, strategic partnerships, and delivering end-to-end client success.",
    link: "https://linkedin.com",
    icon: Compass,
  },
  {
    initials: "AK",
    name: "Akshay Kumar",
    role: "Full Stack Engineer",
    description:
      "Expert in modern web frameworks, frontend performance, and seamless database architecture.",
    link: "https://linkedin.com",
    icon: Code2,
  },
  {
    initials: "OS",
    name: "Om Semwal",
    role: "Lead UI/UX Designer",
    description:
      "Crafts intuitive user experiences, modern visual design systems, and sleek interactive interfaces.",
    link: "https://linkedin.com",
    icon: Palette,
  },
];

export default function TeamSection() {
  return (
    <section id="about" className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-[140px]">
      <SectionTitle
        sectionTitle="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing and web strategies."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {team.map((member, index) => {
          const Icon = member.icon;
          return (
            <Card key={index} isUnderline={true}>
              <div className="p-8 sm:p-[40px] bg-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row relative items-start">
                    {/* Professional Avatar Frame */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
                      {/* Positivus Star Watermark */}
                      <svg viewBox="0 0 100 100" className="absolute -inset-1 w-[110%] h-[110%] text-accent opacity-20 pointer-events-none">
                        <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" fill="currentColor" />
                      </svg>
                      {/* Profile Photo Container */}
                      {member.pic ? (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-zinc-900 shadow-md relative z-10 aspect-square shrink-0 bg-zinc-900">
                          <img
                            src={member.pic}
                            alt={member.name}
                            className="w-full h-full object-cover object-center aspect-square"
                            onError={(e) => {
                              (e.currentTarget.parentElement as HTMLElement).style.display = "none";
                              const fallback = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                        </div>
                      ) : null}
                      {/* Monogram Box Fallback */}
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-900 text-white items-center justify-center shadow-md border-2 border-zinc-900 relative z-10 aspect-square shrink-0"
                        style={{ display: member.pic ? "none" : "flex" }}
                      >
                        <span className="font-inter font-bold text-2xl text-white tracking-widest">
                          {member.initials}
                        </span>
                      </div>
                      {/* Corner Role Badge Icon */}
                      <div className="absolute -bottom-1 -right-1 z-20 w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center shadow-md border-2 border-white">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex flex-col justify-end sm:ml-5 mt-4 sm:mt-0">
                      <h3 className="text-lg font-medium text-black">{member.name}</h3>
                      <p className="text-sm font-normal text-zinc-500">{member.role}</p>
                    </div>
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="absolute right-0 top-0">
                      <img src="/pics/profile-in.svg" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                  </div>
                  <div className="w-full h-[1px] bg-zinc-200 my-6"></div>
                  <p className="text-sm text-zinc-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-end mt-10">
        <button className="btn-primary">See all team</button>
      </div>
    </section>
  );
}
