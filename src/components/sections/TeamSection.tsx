import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const team = [
  {
    pic: "/team/t1.png",
    name: "John Smith",
    role: "CEO and Founder",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    link: "https://linkedin.com",
  },
  {
    pic: "/team/t2.png",
    name: "Jane Doe",
    role: "Director of Operations",
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    link: "https://linkedin.com",
  },
  {
    pic: "/team/t3.png",
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    link: "https://linkedin.com",
  },
  {
    pic: "/team/t4.png",
    name: "Emily Johnson",
    role: "PPC Manager",
    description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    link: "https://linkedin.com",
  },
  {
    pic: "/team/t5.png",
    name: "Brian Williams",
    role: "Social Media Specialist",
    description: "4+ years of experience in social media marketing. Proficient in content creation, metrics analysis, and building engagement",
    link: "https://linkedin.com",
  },
  {
    pic: "/team/t6.png",
    name: "Sarah Kim",
    role: "Content Creator",
    description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    link: "https://linkedin.com",
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
        {team.map((member, index) => (
          <Card key={index} isUnderline={true}>
            <div className="p-8 sm:p-[40px] bg-white h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row relative items-start">
                  <img src={member.pic} alt={member.name} className="w-24 h-24 rounded-full object-cover shrink-0" />
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
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <button className="btn-primary">See all team</button>
      </div>
    </section>
  );
}
