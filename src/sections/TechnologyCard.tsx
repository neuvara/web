type TechnologyCardProps = {
  number: string;
  title: string;
  body: string;
};

export function TechnologyCard({ number, title, body }: TechnologyCardProps) {
  return (
    <article className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-clinical-teal/40 hover:bg-white/[0.05]">
      <span className="font-mono text-2xl font-light text-clinical-teal/40 transition duration-300 group-hover:text-clinical-teal/70">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{body}</p>
    </article>
  );
}
