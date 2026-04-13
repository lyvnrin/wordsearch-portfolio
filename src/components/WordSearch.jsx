import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// 7 rows × 12 columns
const GRID = [
  ['X','K','P','R','O','J','E','C','T','S','M','Q'],
  ['A','B','O','U','T',' ','M','E','Z','W','L','F'],
  ['R','V','N','T','H','G','Y','I','O','P','K','D'],
  ['C','O','N','T','A','C','T','B','S','E','W','J'],
  ['H','J','Q','U','W','M','L','N','F','R','A','S'],
  ['Y','Z','S','K','I','L','L','S','V','X','C','T'],
  ['B','D','F','G','H','K','P','Q','R','U','W','Y'],
]

// Word definitions: which cells belong to each word
const WORDS = {
  projects: {
    route: '/projects',
    colorClass: 'word-projects',
    label: 'Projects',
    cells: [
      [0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]
    ],
  },
  about: {
    route: '/about',
    colorClass: 'word-about',
    label: 'About',
    cells: [
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]
    ],
  },
  contact: {
    route: '/contact',
    colorClass: 'word-contact',
    label: 'Contact',
    cells: [
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6]
    ],
  },
  skills: {
    route: '/skills',
    colorClass: 'word-skills',
    label: 'Skills',
    cells: [
      [5,2],[5,3],[5,4],[5,5],[5,6],[5,7]
    ],
  },
}

// Build a lookup map: "row,col" → wordKey
const CELL_MAP = {}
Object.entries(WORDS).forEach(([key, word]) => {
  word.cells.forEach(([r, c]) => {
    CELL_MAP[`${r},${c}`] = key
  })
})

export default function WordSearch() {
  const navigate = useNavigate()
  const [hoveredWord, setHoveredWord] = useState(null)

  const getWordForCell = useCallback((row, col) => {
    return CELL_MAP[`${row},${col}`] || null
  }, [])

  const handleMouseEnter = useCallback((wordKey) => {
    setHoveredWord(wordKey)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredWord(null)
  }, [])

  const handleClick = useCallback((wordKey) => {
    navigate(WORDS[wordKey].route)
  }, [navigate])

  return (
    <div className="relative min-h-screen grid-background flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Decorative blurred orbs */}
      <div
        className="animate-float pointer-events-none absolute"
        style={{
          top: '15%', left: '8%',
          width: 320, height: 320,
          borderRadius: '50%',
          background: 'hsl(var(--primary) / 0.05)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="animate-float-delayed pointer-events-none absolute"
        style={{
          top: '50%', right: '6%',
          width: 280, height: 280,
          borderRadius: '50%',
          background: 'hsl(var(--accent) / 0.05)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="animate-float-slow pointer-events-none absolute"
        style={{
          bottom: '12%', left: '30%',
          width: 240, height: 240,
          borderRadius: '50%',
          background: 'hsl(var(--secondary) / 0.05)',
          filter: 'blur(60px)',
        }}
      />

      {/* Header */}
      <div className="animate-fade-in text-center mb-8" style={{ animationDelay: '0ms' }}>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Creative Developer
        </p>
        <h1
          className="font-serif font-bold leading-none mb-3"
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            color: 'hsl(var(--primary))',
            letterSpacing: '-0.03em',
          }}
        >
          Lav K
        </h1>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
          Building interfaces that feel alive — one interaction at a time.
        </p>
      </div>

      {/* Grid Card */}
      <div
        className="animate-scale-in"
        style={{ animationDelay: '120ms' }}
      >
        <div
          className="rounded-2xl border shadow-2xl px-6 py-6"
          style={{
            background: 'hsl(var(--card) / 0.75)',
            backdropFilter: 'blur(8px)',
            borderColor: 'hsl(var(--border))',
          }}
        >
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
            Find the words to explore
          </p>

          {/* Grid */}
          <div
            role="grid"
            aria-label="Word search navigation grid"
            style={{ display: 'grid', gridTemplateRows: `repeat(${GRID.length}, auto)` }}
          >
            {GRID.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex' }}>
                {row.map((letter, colIndex) => {
                  const wordKey = getWordForCell(rowIndex, colIndex)
                  const isWordLetter = Boolean(wordKey)
                  const isHighlighted = wordKey && hoveredWord === wordKey
                  const colorClass = wordKey ? WORDS[wordKey].colorClass : ''
                  const delay = (rowIndex * 12 + colIndex) * 10

                  return (
                    <div
                      key={colIndex}
                      className={[
                        'letter-cell',
                        'animate-fade-in',
                        isWordLetter ? 'word-letter' : '',
                        colorClass,
                        isHighlighted ? 'highlighted' : '',
                      ].filter(Boolean).join(' ')}
                      style={{
                        animationDelay: `${delay + 200}ms`,
                        opacity: 0,
                        animationFillMode: 'forwards',
                        color: !isWordLetter
                          ? 'hsl(var(--muted-foreground) / 0.45)'
                          : undefined,
                      }}
                      onMouseEnter={isWordLetter ? () => handleMouseEnter(wordKey) : undefined}
                      onMouseLeave={isWordLetter ? handleMouseLeave : undefined}
                      onClick={isWordLetter ? () => handleClick(wordKey) : undefined}
                      role={isWordLetter ? 'button' : undefined}
                      aria-label={isWordLetter ? `Navigate to ${WORDS[wordKey].label}` : undefined}
                      tabIndex={isWordLetter ? 0 : undefined}
                      onKeyDown={isWordLetter ? (e) => e.key === 'Enter' && handleClick(wordKey) : undefined}
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
      <div
        className="animate-fade-in flex flex-wrap justify-center gap-4 mt-8"
        style={{ animationDelay: '600ms', opacity: 0, animationFillMode: 'forwards' }}
      >
        {Object.entries(WORDS).map(([key, word]) => (
          <button
            key={key}
            onClick={() => navigate(word.route)}
            onMouseEnter={() => setHoveredWord(key)}
            onMouseLeave={() => setHoveredWord(null)}
            className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-opacity hover:opacity-80"
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: `hsl(var(--${key === 'about' ? 'word-about' : key === 'projects' ? 'word-projects' : key === 'contact' ? 'word-contact' : 'word-skills'}))` }}
            />
            <span style={{ color: `hsl(var(--${key === 'about' ? 'word-about' : key === 'projects' ? 'word-projects' : key === 'contact' ? 'word-contact' : 'word-skills'}))` }}>
              {word.label}
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <p
        className="animate-fade-in text-xs text-muted-foreground mt-10 tracking-wide"
        style={{ animationDelay: '800ms', opacity: 0, animationFillMode: 'forwards' }}
      >
        © 2024 Lav K · Crafted with care
      </p>
    </div>
  )
}