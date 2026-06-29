interface GrowingPlantProps {
  /** 0 = seedling, 1 = fully grown & flowering */
  progress: number;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};
const mix = (c1: number[], c2: number[], t: number) =>
  `rgb(${Math.round(lerp(c1[0], c2[0], t))}, ${Math.round(
    lerp(c1[1], c2[1], t)
  )}, ${Math.round(lerp(c1[2], c2[2], t))})`;

const LEAF_GREEN_YOUNG = [124, 196, 92];
const LEAF_GREEN_OLD = [46, 125, 60];

const SOIL_Y = 154;
const STEM_TOP_FULL = 34;

// Each leaf unfurls at the growing tip, then stays put — staggered up the stem.
const LEAVES = [
  { frac: 0.2, side: -1 },
  { frac: 0.32, side: 1 },
  { frac: 0.44, side: -1 },
  { frac: 0.56, side: 1 },
  { frac: 0.68, side: -1 },
  { frac: 0.78, side: 1 },
];

const morph = { transition: 'transform 0.25s ease-out, opacity 0.25s ease-out' } as const;

const GrowingPlant = ({ progress }: GrowingPlantProps) => {
  const growth = clamp01(progress);
  const stemTopY = lerp(SOIL_Y - 4, STEM_TOP_FULL, growth);
  const leafColor = mix(LEAF_GREEN_YOUNG, LEAF_GREEN_OLD, growth);
  const bloom = smoothstep(0.84, 0.98, growth);

  return (
    <svg viewBox="0 0 160 200" className="w-full text-foreground" role="img" aria-label="Growing plant">
      {/* Pot */}
      <path d="M52 156 L108 156 L100 194 L60 194 Z" fill="#c2603f" stroke="currentColor" strokeWidth="3" />
      <rect x="46" y="146" width="68" height="14" fill="#c2603f" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="80" cy="153" rx="30" ry="5" fill="#5b3a29" />

      {/* Stem */}
      <line
        x1="80"
        y1={SOIL_Y}
        x2="80"
        y2={stemTopY}
        stroke={leafColor}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Leaves */}
      {LEAVES.map((leaf, i) => {
        const scale = smoothstep(leaf.frac, leaf.frac + 0.1, growth);
        const y = lerp(SOIL_Y, STEM_TOP_FULL, leaf.frac);
        return (
          <g
            key={i}
            style={{
              ...morph,
              transformBox: 'view-box',
              transformOrigin: `80px ${y}px`,
              transform: `scale(${scale})`,
              opacity: scale,
            }}
          >
            <g transform={`translate(80 ${y})`}>
              <path
                d={`M0 0 Q ${leaf.side * 20} -13 ${leaf.side * 38} -1 Q ${leaf.side * 20} 9 0 0 Z`}
                fill={leafColor}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d={`M0 0 Q ${leaf.side * 18} -4 ${leaf.side * 32} -1`}
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                opacity="0.5"
              />
            </g>
          </g>
        );
      })}

      {/* Bud + bloom at the tip */}
      <g
        style={{
          ...morph,
          transformBox: 'view-box',
          transformOrigin: `80px ${stemTopY}px`,
          transform: `scale(${bloom})`,
          opacity: bloom,
        }}
      >
        <g transform={`translate(80 ${stemTopY})`}>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-13"
              rx="7"
              ry="12"
              fill="hsl(var(--primary))"
              stroke="currentColor"
              strokeWidth="2"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle r="7" fill="hsl(var(--secondary))" stroke="currentColor" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
};

export default GrowingPlant;
