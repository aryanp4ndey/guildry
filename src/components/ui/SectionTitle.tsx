export default function SectionTitle({
  sectionTitle,
  description,
}: {
  sectionTitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-10 mb-14 sm:flex-row">
      <h2 className="accenthead text-center sm:text-left text-3xl sm:text-4xl font-medium">
        {sectionTitle}
      </h2>
      <p className="w-auto text-center sm:text-left sm:w-[580px] text-zinc-700">
        {description}
      </p>
    </div>
  );
}
