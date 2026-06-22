const items = [
  { label: "Mission", value: "Rare disease prediction from MRI + clinical data" },
  { label: "Current stage", value: "Research-stage model validation" },
  { label: "Clinical posture", value: "Decision support with human oversight" }
];

export function EvidenceStrip() {
  return (
    <div className="premium-card grid rounded-2xl md:grid-cols-3">
      {items.map((item, index) => (
        <div
          className={`relative p-5 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}
          key={item.label}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
            {item.label}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
