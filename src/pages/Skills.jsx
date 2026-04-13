import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TECHNICAL = [
  'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js',
  'Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs',
  'Git', 'Docker', 'Figma', 'AWS', 'CI/CD',
]

const INTERPERSONAL = [
  'Communication', 'Collaboration', 'Problem Solving',
  'Leadership', 'Adaptability', 'Time Management',
]

// Cycles through warm hues derived from the palette
const HUE_CYCLE = [0, 355, 20, 345, 10, 350, 30, 340, 5, 360, 25, 335, 15, 355, 0]

export default function Skills() {
  return (
    <div className="page-container animate-fade-in">
      <div className="max-w-xl mx-auto">
        <Link to="/" className="back-link">
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="animate-fade-in" style={{ animationDelay: '80ms' }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">
              What I Work With
            </span>
          </div>
          <h1 className="page-title mb-8" style={{ color: 'hsl(var(--primary))' }}>
            Skills
          </h1>
        </div>

        <div
          className="notepad-card animate-scale-in"
          style={{ animationDelay: '160ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          {/* Technical Skills */}
          <div className="mb-8">
            <h2
              className="font-serif font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: 'hsl(var(--primary))' }}
            >
              Technical
            </h2>
            <ul className="space-y-2">
              {TECHNICAL.map((skill, i) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-sm animate-fade-in"
                  style={{
                    animationDelay: `${200 + i * 30}ms`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `hsl(${HUE_CYCLE[i % HUE_CYCLE.length]} 60% 38%)` }}
                  />
                  <span className="font-medium text-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div
            className="mb-8 h-px"
            style={{ background: 'hsl(var(--border))' }}
          />

          {/* Interpersonal Skills */}
          <div>
            <h2
              className="font-serif font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: 'hsl(var(--primary))' }}
            >
              Interpersonal
            </h2>
            <ul className="space-y-2">
              {INTERPERSONAL.map((skill, i) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-sm animate-fade-in"
                  style={{
                    animationDelay: `${640 + i * 30}ms`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `hsl(${HUE_CYCLE[(i + 6) % HUE_CYCLE.length]} 55% 40%)` }}
                  />
                  <span className="font-medium text-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="animate-fade-in text-center text-xs text-muted-foreground mt-6 italic"
          style={{ animationDelay: '900ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          Always learning, always growing.
        </p>
      </div>
    </div>
  )
}