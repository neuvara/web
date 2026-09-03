type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-clinical-teal">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{body}</p>
      ) : null}
    </div>
  );
}
