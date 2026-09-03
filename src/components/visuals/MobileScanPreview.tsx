export function MobileScanPreview() {
  return (
    <div className="relative mt-8 aspect-[1.75] overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] md:hidden">
      <div className="scan-grid absolute inset-0 opacity-50" />
      <div className="absolute left-[12%] top-[10%] h-[80%] w-[42%] rounded-[48%] bg-[radial-gradient(circle_at_50%_50%,rgba(184,237,255,0.35),rgba(105,184,255,0.16)_48%,transparent_74%)]" />
      <div className="absolute left-[22%] top-[38%] h-12 w-16 rounded-full bg-clinical-teal/30 blur-xl" />
      <div className="absolute bottom-4 right-4 top-4 w-[42%] rounded-2xl border border-white/10 bg-navy-950/40 p-3">
        <div className="mb-3 h-2 w-16 bg-clinical-teal/70" />
        <div className="space-y-2">
          {[42, 68, 54, 77, 61].map((width) => (
            <div className="flex items-center gap-2" key={width}>
              <span className="h-1.5 w-5 bg-clinical-cyan/25" />
              <span className="h-1.5 bg-clinical-teal/70" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
      <svg
        aria-hidden="true"
        className="absolute left-[13%] top-[12%] h-[76%] w-[42%]"
        fill="none"
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42 72c21-23 53-27 80-10M36 95c29-13 58-11 87 8M48 121c26 8 54 5 84-11M79 49c-13 25-14 50-3 76M112 52c13 26 13 55 0 84"
          opacity="0.7"
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
      </svg>
    </div>
  );
}
