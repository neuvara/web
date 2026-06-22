const stages = [
  {
    label: "Research stage",
    title: "Model evidence from diverse MRI cohorts",
    items: [
      "Scanner-aware MRI normalisation",
      "Rare disease pattern discovery",
      "Similarity search against confirmed cases"
    ]
  },
  {
    label: "Validation stage",
    title: "Clinician-reviewed prediction workflows",
    items: [
      "Retrospective validation studies",
      "MRI + clinical data fusion",
      "Explainable prediction outputs",
      "Human-in-the-loop review"
    ]
  },
  {
    label: "Platform stage",
    title: "AI models for earlier rare disease risk signals",
    items: [
      "Brain MRI foundation models",
      "Longitudinal disease modelling",
      "Privacy-conscious hospital deployment",
      "Earlier prediction of rare disease risk"
    ]
  }
];

const accents = [
  "border-clinical-teal/30 hover:border-clinical-teal/60",
  "border-brand-purple/30 hover:border-brand-purple/60",
  "border-clinical-blue/30 hover:border-clinical-blue/60"
];

export function IntelligenceTimeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {stages.map((stage, index) => (
        <article
          className={`reveal-on-scroll relative rounded-2xl border bg-white/[0.03] p-6 transition duration-300 stagger-${index + 1} ${accents[index]}`}
          key={stage.label}
        >
          <div className="relative mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
              {stage.label}
            </p>
            <span className="font-mono text-sm text-slate-500">0{index + 1}</span>
          </div>
          <h3 className="relative text-xl font-semibold text-white">{stage.title}</h3>
          <ul className="relative mt-5 grid gap-3">
            {stage.items.map((item) => (
              <li className="flex gap-3 text-sm leading-6 text-slate-300" key={item}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-teal" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
