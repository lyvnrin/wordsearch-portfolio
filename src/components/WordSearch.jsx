import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const GRID = [
  ['X','K','P','R','O','J','E','C','T','S','M','Q'],
  ['A','B','O','U','T',' ','M','E','Z','W','L','F'],
  ['R','V','N','T','H','G','Y','I','O','P','K','D'],
  ['C','O','N','T','A','C','T','B','S','E','W','J'],
  ['H','J','Q','U','W','M','L','N','F','R','A','S'],
  ['Y','Z','S','K','I','L','L','S','V','X','C','T'],
  ['B','D','F','G','H','K','P','Q','R','U','W','Y'],
]

const WORDS = {
  projects: { route: '/projects', colorClass: 'word-projects', label: 'Projects', color: 'var(--word-projects)',
    cells: [[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]] },
  about:    { route: '/about',    colorClass: 'word-about',    label: 'About',    color: 'var(--word-about)',
    cells: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]] },
  contact:  { route: '/contact',  colorClass: 'word-contact',  label: 'Contact',  color: 'var(--word-contact)',
    cells: [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6]] },
  skills:   { route: '/skills',   colorClass: 'word-skills',   label: 'Skills',   color: 'var(--word-skills)',
    cells: [[5,2],[5,3],[5,4],[5,5],[5,6],[5,7]] },
}

const CELL_MAP = {}
Object.entries(WORDS).forEach(([key, word]) => {
  word.cells.forEach(([r, c]) => { CELL_MAP[`${r},${c}`] = key })
})

const DOT_COLORS = {
  projects: 'hsl(355, 70%, 42%)',
  about:    'hsl(0,   65%, 35%)',
  contact:  'hsl(20,  75%, 45%)',
  skills:   'hsl(345, 60%, 38%)',
}

export default function WordSearch() {
  const navigate = useNavigate()
  const [hoveredWord, setHoveredWord] = useState(null)

  const getWord = useCallback((r, c) => CELL_MAP[`${r},${c}`] || null, [])

  return (
    <div className="home-wrapper grid-background">
      {/* Orbs */}
      <div className="home-orb animate-float"
        style={{ top:'15%', left:'8%', width:320, height:320, background:'hsl(0 60% 30% / 0.05)' }} />
      <div className="home-orb animate-float-delayed"
        style={{ top:'50%', right:'6%', width:280, height:280, background:'hsl(358 63% 28% / 0.05)' }} />
      <div className="home-orb animate-float-slow"
        style={{ bottom:'12%', left:'30%', width:240, height:240, background:'hsl(355 65% 33% / 0.05)' }} />

      {/* Header */}
      <div className="home-header animate-fade-in" style={{ animationDelay:'0ms' }}>
        <p className="home-label">Creative Developer</p>
        <h1 className="home-name">Lav K</h1>
        <p className="home-tagline">Building interfaces that feel alive - one interaction at a time.</p>
      </div>

      {/* Grid Card */}
      <div className="animate-scale-in" style={{ animationDelay:'120ms' }}>
        <div className="grid-card">
          <p className="grid-hint">Find the words to explore</p>
          <div className="grid-rows">
            {GRID.map((row, ri) => (
              <div key={ri} className="grid-row">
                {row.map((letter, ci) => {
                  const wordKey = getWord(ri, ci)
                  const isWord = Boolean(wordKey)
                  const isHighlighted = wordKey && hoveredWord === wordKey
                  const delay = (ri * 12 + ci) * 10

                  return (
                    <div
                      key={ci}
                      className={[
                        'letter-cell',
                        'animate-fade-in',
                        isWord ? 'word-letter' : '',
                        isWord ? WORDS[wordKey].colorClass : '',
                        isHighlighted ? 'highlighted' : '',
                      ].filter(Boolean).join(' ')}
                      style={{
                        animationDelay: `${delay + 200}ms`,
                        opacity: 0,
                        animationFillMode: 'forwards',
                      }}
                      onMouseEnter={isWord ? () => setHoveredWord(wordKey) : undefined}
                      onMouseLeave={isWord ? () => setHoveredWord(null)    : undefined}
                      onClick={isWord ? () => navigate(WORDS[wordKey].route) : undefined}
                      role={isWord ? 'button' : undefined}
                      tabIndex={isWord ? 0 : undefined}
                      aria-label={isWord ? `Go to ${WORDS[wordKey].label}` : undefined}
                      onKeyDown={isWord ? (e) => e.key === 'Enter' && navigate(WORDS[wordKey].route) : undefined}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="legend animate-fade-in"
        style={{ animationDelay:'600ms', opacity:0, animationFillMode:'forwards' }}>
        {Object.entries(WORDS).map(([key, word]) => (
          <button key={key} className="legend-item"
            onClick={() => navigate(word.route)}
            onMouseEnter={() => setHoveredWord(key)}
            onMouseLeave={() => setHoveredWord(null)}>
            <span className="legend-dot" style={{ backgroundColor: DOT_COLORS[key] }} />
            <span style={{ color: DOT_COLORS[key] }}>{word.label}</span>
          </button>
        ))}
      </div>

      <p className="home-footer animate-fade-in"
        style={{ animationDelay:'800ms', opacity:0, animationFillMode:'forwards' }}>
        © 2024 Lav K · Crafted with care
      </p>
    </div>
  )
}