const scanRows = Array.from({ length: 12 }, (_, index) => index);
const signals = [
  { label: "Scanner profile", value: "Protocol harmonised" },
  { label: "Representation", value: "Shared volumetric backbone" },
  { label: "Intelligence layer", value: "Heatmaps + cohort search" }
];

export function ClinicalHeroVisual() {
  return (
    <div className="premium-surface relative mx-auto w-full max-w-[500px] rounded-[1.75rem] p-4 xl:max-w-[520px]">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-300">
        <span className="font-semibold text-white">Neuvara MRI Intelligence</span>
        <span className="text-clinical-cyan">Physics-informed</span>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-navy-950">
          <div className="scan-grid absolute inset-0 opacity-55" />
          <div className="absolute inset-5 rounded-[1.35rem] border border-clinical-cyan/20" />
          <div className="absolute left-[18%] top-[13%] h-[74%] w-[64%] rounded-[48%] bg-[radial-gradient(circle_at_48%_52%,rgba(184,237,255,0.35),rgba(105,184,255,0.16)_44%,transparent_72%)]" />
          <div className="absolute left-[32%] top-[39%] h-24 w-32 rounded-full bg-clinical-teal/40 blur-xl" />
          <div className="soft-glow absolute left-[28%] top-[30%] h-32 w-40 rounded-full bg-clinical-blue/15 blur-2xl" />
          <div className="absolute left-0 right-0 top-[45%] h-px animate-scan bg-clinical-teal shadow-[0_0_28px_rgba(72,212,192,0.8)]" />
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            fill="none"
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82 125c34-38 86-45 130-18M71 164c47-22 94-18 141 13M86 211c43 13 88 7 136-18M139 85c-21 42-23 84-5 126M194 90c21 43 22 90 0 137"
              opacity="0.68"
              stroke="#B8EDFF"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              d="M113 159c27-12 55-12 86 1M116 191c25 15 55 15 90-1"
              opacity="0.9"
              stroke="#48D4C0"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 text-[0.65rem] text-slate-300">
            <span className="rounded-xl border border-white/10 bg-navy-950/80 px-2 py-2">T1/T2</span>
            <span className="rounded-xl border border-white/10 bg-navy-950/80 px-2 py-2">3D volume</span>
            <span className="rounded-xl border border-white/10 bg-navy-950/80 px-2 py-2">Overlay</span>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clinical-teal">
              Normalisation
            </p>
            <div className="mt-4 space-y-2">
              {scanRows.map((row) => (
                <div className="flex items-center gap-2" key={row}>
                  <span className="h-1.5 w-8 bg-clinical-cyan/25" />
                  <span
                    className="h-1.5 bg-clinical-teal/70"
                    style={{ width: `${42 + ((row * 11) % 46)}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clinical-teal">
              Cohort search
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div className="aspect-square rounded-xl border border-white/10 bg-[radial-gradient(circle,rgba(184,237,255,0.28),rgba(16,36,59,0.35)_48%,rgba(7,17,31,0.8))] transition duration-300 hover:border-clinical-teal/40" key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {signals.map((signal) => (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3" key={signal.label}>
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-400">
              {signal.label}
            </p>
            <p className="mt-2 text-xs font-semibold leading-5 text-white">{signal.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
