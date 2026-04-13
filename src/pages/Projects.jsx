import { Link } from 'react-router-dom'
import { ArrowLeft, Folder, ExternalLink } from 'lucide-react'

const PROJECTS = [
  { title:'Interactive Portfolio', featured:true,  tags:['React','TypeScript','Tailwind'],       desc:'A personal portfolio built around a word search puzzle — where the navigation itself is the experience.' },
  { title:'Project Alpha',         featured:false, tags:['Three.js','GSAP','WebGL'],             desc:'An immersive 3D web experience with fluid animations, custom shaders, and scroll-driven storytelling.' },
  { title:'Project Beta',          featured:false, tags:['Next.js','PostgreSQL','WebSockets'],   desc:'A real-time collaborative platform with live cursors, presence indicators, and instant sync.' },
]

export default function Projects() {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-inner-wide">
        <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to home</Link>

        <div className="page-eyebrow">
          <Folder size={13} style={{ color:'var(--secondary)' }} />
          Selected Work
        </div>
        <h1 className="page-title" style={{ color:'var(--secondary)' }}>Projects</h1>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className={`project-card animate-scale-in${p.featured ? ' featured' : ''}`}
              style={{ animationDelay:`${120 + i*80}ms`, opacity:0, animationFillMode:'forwards' }}>
              {p.featured && <span className="project-badge">Featured</span>}
              <div className="project-icon"><ExternalLink size={14} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tag-list">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <p className="page-footnote animate-fade-in" style={{ animationDelay:'440ms', opacity:0, animationFillMode:'forwards' }}>
          More projects coming soon…
        </p>
      </div>
    </div>
  )
}