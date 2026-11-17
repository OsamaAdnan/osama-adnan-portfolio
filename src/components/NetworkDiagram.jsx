/**
 * Renders a small network / architecture diagram from a spec in content.js.
 * Canvas is 420 x 240. Nodes are centred on (x, y).
 */
const W = 120
const H = 38

const KIND_STYLE = {
  core: { stroke: '#22d3ee', fill: 'rgba(34,211,238,0.10)' },
  security: { stroke: '#f5b94c', fill: 'rgba(245,185,76,0.10)' },
  network: { stroke: '#2f7bff', fill: 'rgba(47,123,255,0.12)' },
  wireless: { stroke: '#22d3ee', fill: 'rgba(34,211,238,0.08)' },
  server: { stroke: '#7aa2ff', fill: 'rgba(122,162,255,0.10)' },
  storage: { stroke: '#7aa2ff', fill: 'rgba(122,162,255,0.06)' },
  endpoint: { stroke: '#64748b', fill: 'rgba(100,116,139,0.12)' },
  process: { stroke: '#2f7bff', fill: 'rgba(47,123,255,0.06)' },
}

export default function NetworkDiagram({ diagram, title }) {
  const byId = Object.fromEntries(diagram.nodes.map((n) => [n.id, n]))

  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 420 240"
        role="img"
        aria-label={`${title} diagram. ${diagram.caption}`}
        className="h-auto w-full"
      >
        <defs>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(47,123,255,0.18)" />
          </pattern>
        </defs>
        <rect width="420" height="240" rx="14" fill="#08102a" />
        <rect width="420" height="240" rx="14" fill="url(#dots)" />

        {diagram.links.map((l, i) => {
          const a = byId[l.from]
          const b = byId[l.to]
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={l.dashed ? '#4b5d8a' : '#2f7bff'}
              strokeWidth="1.6"
              strokeDasharray={l.dashed ? '5 5' : '6 6'}
              className={l.dashed ? '' : 'animate-flow'}
              opacity="0.85"
            />
          )
        })}

        {diagram.nodes.map((n) => {
          const s = KIND_STYLE[n.kind] || KIND_STYLE.network
          return (
            <g key={n.id} transform={`translate(${n.x - W / 2} ${n.y - H / 2})`}>
              <rect
                width={W}
                height={H}
                rx="8"
                fill="#0a1226"
              />
              <rect
                width={W}
                height={H}
                rx="8"
                fill={s.fill}
                stroke={s.stroke}
                strokeWidth="1.4"
                strokeDasharray={n.planned ? '4 3' : undefined}
              />
              <text
                x={W / 2}
                y={n.sub ? 16 : 23}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#e2e8f0"
                fontFamily="Inter, system-ui, sans-serif"
              >
                {n.label}
              </text>
              {n.sub && (
                <text
                  x={W / 2}
                  y={29}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#8fa3c8"
                  fontFamily="Inter, system-ui, sans-serif"
                >
                  {n.sub}
                </text>
              )}
            </g>
          )
        })}
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500">{diagram.caption}</figcaption>
    </figure>
  )
}
