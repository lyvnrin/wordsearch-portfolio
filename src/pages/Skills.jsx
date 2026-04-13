import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TECHNICAL     = ['React','TypeScript','Tailwind CSS','Next.js','Vue.js','Node.js','Python','PostgreSQL','GraphQL','REST APIs','Git','Docker','Figma','AWS','CI/CD']
const INTERPERSONAL = ['Communication','Collaboration','Problem Solving','Leadership','Adaptability','Time Management']
const HUES          = [0,355,20,345,10,350,30,340,5,360,25,335,15,355,0]

export default function Skills() {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-inner">
        <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to home</Link>

        <div className="page-eyebrow">What I Work With</div>
        <h1 className="page-title" style={{ color:'var(--primary)' }}>Skills</h1>

        <div className="card animate-scale-in" style={{ animationDelay:'120ms', opacity:0, animationFillMode:'forwards' }}>
          <p className="skills-section-title">Technical</p>
          <ul className="skills-list">
            {TECHNICAL.map((s, i) => (
              <li key={s} className="skill-item animate-fade-in"
                style={{ animationDelay:`${200+i*25}ms`, opacity:0, animationFillMode:'forwards' }}>
                <span className="skill-dot" style={{ backgroundColor:`hsl(${HUES[i%HUES.length]}, 60%, 38%)` }} />
                {s}
              </li>
            ))}
          </ul>

          <div className="skills-divider" />

          <p className="skills-section-title">Interpersonal</p>
          <ul className="skills-list">
            {INTERPERSONAL.map((s, i) => (
              <li key={s} className="skill-item animate-fade-in"
                style={{ animationDelay:`${600+i*25}ms`, opacity:0, animationFillMode:'forwards' }}>
                <span className="skill-dot" style={{ backgroundColor:`hsl(${HUES[(i+6)%HUES.length]}, 55%, 40%)` }} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <p className="page-footnote animate-fade-in" style={{ animationDelay:'900ms', opacity:0, animationFillMode:'forwards' }}>
          Always learning, always growing.
        </p>
      </div>
    </div>
  )
}