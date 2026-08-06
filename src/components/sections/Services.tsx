import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";

const cards = [
  {
    index: 1,
    titleTop: "Premium Business",
    titleBottom: "Websites",
    img: "/pics/card-pic1.png",
    alt: "Premium Websites",
    link: "/services",
  },
  {
    index: 2,
    titleTop: "Landing",
    titleBottom: "Pages",
    img: "/pics/card-pic2.png",
    alt: "Landing Pages",
    link: "/services",
  },
  {
    index: 3,
    titleTop: "Website",
    titleBottom: "Redesign",
    img: "/pics/card-pic3.png",
    alt: "Website Redesign",
    link: "/services",
  },
  {
    index: 1,
    titleTop: "Booking",
    titleBottom: "Websites",
    img: "/pics/card-pic4.png",
    alt: "Booking Websites",
    link: "/services",
  },
  {
    index: 2,
    titleTop: "E-Commerce",
    titleBottom: "Websites",
    img: "/pics/card-pic5.png",
    alt: "E-Commerce",
    link: "/services",
  },
  {
    index: 3,
    titleTop: "Website",
    titleBottom: "Maintenance",
    img: "/pics/card-pic6.png",
    alt: "Maintenance",
    link: "/services",
  },
];

const description =
  "At Guildry, we offer a range of premium web design and development services tailored to help your business establish a powerful online presence.";

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-[140px] mb-5">
      <SectionTitle sectionTitle="Services" description={description} />
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10">
        {cards.map((card, idx) => (
          <ServiceCard
            key={idx}
            index={card.index}
            titleTop={card.titleTop}
            titleBottom={card.titleBottom}
            img={card.img}
            alt={card.alt}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}
