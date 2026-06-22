const trustItems = [
  {
    title: "Evidence before deployment",
    body: "Validation is staged around retrospective cohorts, scanner-diverse datasets, and prospective partner studies before clinical use."
  },
  {
    title: "Research-stage platform",
    body: "Neuvara is being built for validation and decision support. It is not positioned as a replacement for specialist judgement."
  },
  {
    title: "Human oversight",
    body: "Predictions are paired with model evidence, similar cases, and interpretability overlays for clinician review."
  },
  {
    title: "Privacy-conscious architecture",
    body: "The long-term direction supports privacy-preserving learning where patient data can remain within hospital environments."
  },
  {
    title: "Governance by design",
    body: "The platform is intended to prioritise minimisation, auditability, secure handling, and clear clinical accountability."
  }
];

export function ValidationTrust() {
  return (
    <div className="space-y-3">
      {trustItems.map((item, index) => (
        <div
          className={`accent-item-purple reveal-on-scroll rounded-r-xl py-3 stagger-${index + 1}`}
          key={item.title}
        >
          <h3 className="text-sm font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm leading-7 text-slate-400">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
