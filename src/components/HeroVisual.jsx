/** Decorative technical illustration for the hero: a small network topology. */
const nodes = [
  { id: 'fw', x: 200, y: 70, r: 22, label: 'FIREWALL', color: '#f5b94c' },
  { id: 'core', x: 200, y: 175, r: 26, label: 'CORE', color: '#22d3ee' },
  { id: 'srv', x: 82, y: 190, r: 18, label: 'SERVERS', color: '#7aa2ff' },
  { id: 'ap', x: 320, y: 190, r: 18, label: 'WI-FI', color: '#22d3ee' },
  { id: 'cl1', x: 60, y: 290, r: 12, label: '', color: '#64748b' },
  { id: 'cl2', x: 140, y: 300, r: 12, label: '', color: '#64748b' },
  { id: 'cl3', x: 262, y: 300, r: 12, label: '', color: '#64748b' },
  { id: 'cl4', x: 342, y: 290, r: 12, label: '', color: '#64748b' },
  { id: 'wan', x: 200, y: 18, r: 10, label: '', color: '#2f7bff' },
]
const links = [
  ['wan', 'fw'],
  ['fw', 'core'],
  ['core', 'srv'],
  ['core', 'ap'],
  ['srv', 'cl1'],
  ['srv', 'cl2'],
  ['ap', 'cl3'],
  ['ap', 'cl4'],
]
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-floaty" aria-hidden="true">
      <div className="absolute inset-0 -z-10 rounded-full bg-electric/20 blur-3xl" />
      <svg viewBox="0 0 400 330" className="h-auto w-full">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={byId[a].x}
            y1={byId[a].y}
            x2={byId[b].x}
            y2={byId[b].y}
            stroke="#2f7bff"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="animate-flow"
            opacity="0.7"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={n.r + 8} fill={n.color} opacity="0.08" className="animate-pulseSoft" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#0a1226" stroke={n.color} strokeWidth="1.6" />
            <circle cx={n.x} cy={n.y} r={Math.max(3, n.r / 4)} fill={n.color} />
            {n.label && (
              <text
                x={n.x}
                y={n.y + n.r + 16}
                textAnchor="middle"
                fontSize="9"
                letterSpacing="1.5"
                fill="#8fa3c8"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
              >
                {n.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}
