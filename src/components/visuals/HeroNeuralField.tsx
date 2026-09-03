export function HeroNeuralField() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 820"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="animate-slow-pulse"
        d="M-50 610C180 490 254 250 450 302c134 35 133 192 286 204 207 17 260-252 516-210 128 21 213 111 288 202"
        stroke="url(#heroPathA)"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
      <path
        className="animate-slow-pulse"
        d="M12 230c145-68 279-69 402-4 134 70 216 174 396 126 203-54 269-184 454-111 80 31 147 87 214 168"
        stroke="url(#heroPathB)"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <path
        d="M187 678c147-204 296-292 448-264 145 26 214 151 356 116 114-28 165-132 314-142"
        stroke="rgba(184,237,255,0.18)"
        strokeDasharray="4 10"
        strokeLinecap="round"
        strokeWidth="1"
      />
      {[
        [228, 456],
        [450, 302],
        [736, 506],
        [995, 404],
        [1252, 296],
        [414, 226],
        [810, 352],
        [1134, 230]
      ].map(([cx, cy]) => (
        <circle
          className="animate-slow-pulse"
          cx={cx}
          cy={cy}
          fill="#48D4C0"
          key={`${cx}-${cy}`}
          opacity="0.55"
          r="3.5"
        />
      ))}
      <defs>
        <linearGradient id="heroPathA" x1="-50" x2="1540" y1="610" y2="296">
          <stop stopColor="#48D4C0" stopOpacity="0" />
          <stop offset="0.45" stopColor="#B8EDFF" stopOpacity="0.44" />
          <stop offset="1" stopColor="#69B8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroPathB" x1="12" x2="1478" y1="230" y2="409">
          <stop stopColor="#69B8FF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#48D4C0" stopOpacity="0.35" />
          <stop offset="1" stopColor="#B8EDFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
