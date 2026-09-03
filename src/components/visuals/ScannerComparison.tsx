const brainPaths = (
  <>
    <path
      d="M42 72c21-23 53-27 80-10M36 95c29-13 58-11 87 8M48 121c26 8 54 5 84-11M79 49c-13 25-14 50-3 76M112 52c13 26 13 55 0 84"
      opacity="0.68"
      stroke="#B8EDFF"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <path
      d="M65 93c16-7 34-7 52 1"
      opacity="0.9"
      stroke="#48D4C0"
      strokeLinecap="round"
      strokeWidth="2.5"
    />
  </>
);

type PanelProps = {
  label: string;
  tint: string;
  scale: number;
};

function ScanPanel({ label, tint, scale }: PanelProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-navy-950">
      <div className="scan-grid absolute inset-0 opacity-55" />
      <div className="absolute inset-4 rounded-[1.25rem] border border-clinical-cyan/20" />
      <div
        className="absolute left-[16%] top-[14%] h-[72%] w-[68%] rounded-[48%]"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${tint}, rgba(105,184,255,0.14) 46%, transparent 74%)`
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`translate(90 90) scale(${scale}) translate(-90 -90)`}>
          {brainPaths}
        </g>
      </svg>
      <span className="absolute left-3 top-3 rounded-lg border border-white/10 bg-navy-950/80 px-2 py-1 text-[0.65rem] text-slate-300">
        {label}
      </span>
    </div>
  );
}

export function ScannerComparison() {
  return (
    <div className="premium-surface relative mx-auto w-full max-w-[500px] rounded-[1.75rem] p-4 xl:max-w-[520px]">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-300">
        <span className="font-semibold text-white">Same subject, same week</span>
        <span className="text-clinical-cyan">Two scanners</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ScanPanel label="Scanner A" scale={1} tint="rgba(184,237,255,0.34)" />
        <ScanPanel label="Scanner B" scale={0.92} tint="rgba(169,107,200,0.3)" />
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clinical-teal">
          Measured volume
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-[0.65rem] text-slate-400">
              Scanner A
            </span>
            <span className="h-2 w-[78%] rounded-full bg-clinical-teal/70" />
          </div>
          <div className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-[0.65rem] text-slate-400">
              Scanner B
            </span>
            <span className="h-2 w-[63%] rounded-full bg-brand-purple/70" />
          </div>
        </div>
        <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-6 text-slate-300">
          Anatomy unchanged. The measurement is not.
        </p>
      </div>

      <p className="mt-4 text-[0.68rem] leading-5 text-slate-400">
        Illustrative only. Not real patient data, and not a Neuvara result.
      </p>
    </div>
  );
}
