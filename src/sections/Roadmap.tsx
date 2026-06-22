const roadmap = [
  {
    phase: "Phase 1",
    title: "MRI data infrastructure",
    body: "Build ingestion, metadata capture, preprocessing, and dataset documentation workflows for research-grade MRI cohorts."
  },
  {
    phase: "Phase 2",
    title: "Scanner harmonisation",
    body: "Evaluate harmonisation methods across scanner manufacturers, field strengths, sequences, and acquisition protocols."
  },
  {
    phase: "Phase 3",
    title: "Multimodal modelling",
    body: "Combine volumetric MRI representations with clinical context, metadata, and cohort retrieval for research prediction workflows."
  },
  {
    phase: "Phase 4",
    title: "Clinical validation",
    body: "Run retrospective studies with defined endpoints, scanner-diverse cohorts, model cards, and specialist review of evidence outputs."
  },
  {
    phase: "Phase 5",
    title: "Prospective deployment studies",
    body: "Move toward privacy-conscious hospital evaluation and prospective workflow studies after retrospective evidence is established."
  }
];

export function Roadmap() {
  return (
    <div className="relative lg:pl-8">
      <div className="absolute left-0 top-1 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-clinical-teal/50 via-brand-purple/40 to-transparent lg:block" />
      <div className="grid gap-6 lg:gap-8">
        {roadmap.map((item, index) => (
          <div
            className={`reveal-on-scroll relative grid gap-4 lg:grid-cols-[200px_1fr] lg:gap-8 stagger-${index + 1}`}
            key={item.phase}
          >
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-1 hidden h-3 w-3 rounded-full border-2 border-clinical-teal bg-navy-950 lg:block" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
                {item.phase}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-sm leading-7 text-slate-400 lg:pt-5">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
