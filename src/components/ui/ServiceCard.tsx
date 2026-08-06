import Card from "./Card";

interface ServiceCardProps {
  index: number;
  titleTop: string;
  titleBottom: string;
  img: string;
  alt: string;
  link: string;
}

export default function ServiceCard({
  index,
  titleTop,
  titleBottom,
  img,
  alt,
  link,
}: ServiceCardProps) {
  const isBgGray = index === 1;
  const isBgAccent = index === 2;
  const isBgDark = index === 3;

  const bgClass = isBgGray
    ? "bg-gray"
    : isBgAccent
    ? "bg-accent"
    : "bg-dark text-gray";

  const headClass = isBgGray ? "accenthead" : "whitehead";
  const iconSrc = isBgDark ? "/icon7.svg" : "/icon6.svg";

  return (
    <Card isUnderline={true}>
      <div
        className={`h-[300px] w-full sm:h-full lg:gap-[60px] grid grid-cols-2 p-8 sm:p-[50px] rounded-[45px] ${bgClass}`}
      >
        <h3 className="flex flex-col col-span-2 lg:col-span-1">
          <span className={`w-[fit-content] ${headClass}`}>{titleTop}</span>
          <span className={`w-[fit-content] ${headClass}`}>{titleBottom}</span>
        </h3>
        <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
          <img
            src={img}
            alt={alt}
            className="h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover"
          />
        </picture>
        <div className="flex items-end">
          <a href={link} className="flex items-center gap-3.5 hover:opacity-80 transition-opacity">
            <img src={iconSrc} alt="Link icon" className="w-10 h-10" />
            <span className="hidden sm:block font-medium">Service Info</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
