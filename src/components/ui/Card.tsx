export default function Card({
  children,
  isUnderline = true,
}: {
  children: React.ReactNode;
  isUnderline?: boolean;
}) {
  return isUnderline ? (
    <div className="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] overflow-hidden h-full">
      {children}
    </div>
  ) : (
    <div className="rounded-[45px] h-full">{children}</div>
  );
}
