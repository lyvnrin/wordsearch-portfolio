import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles, Code2, Palette } from 'lucide-react'

export default function About() {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-inner">
        <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to home</Link>

        <div className="page-eyebrow">
          <Sparkles size={13} style={{ color:'var(--primary)' }} />
          Who I Am
        </div>
        <h1 className="page-title" style={{ color:'var(--primary)' }}>About Me</h1>

        <div className="card animate-scale-in" style={{ animationDelay:'120ms' }}>
          <div className="about-text">
            <p>I'm a creative developer who lives at the intersection of design and engineering. With a deep love for typography, motion, and interaction design, I craft digital experiences that feel considered and alive — not just functional.</p>
            <p>My background spans front-end architecture, design systems, and the occasional deep dive into creative coding. I believe the best interfaces are the ones where you can't tell where the engineering ends and the artistry begins.</p>
            <p>When I'm not staring at a code editor, I'm probably sketching layouts on paper, obsessing over font pairings, or exploring some corner of generative art that has absolutely no business purpose whatsoever — but brings me tremendous joy.</p>
          </div>
        </div>

        <div className="icon-cards animate-fade-in" style={{ animationDelay:'240ms', opacity:0, animationFillMode:'forwards' }}>
          {[
            { Icon: Code2,    title: 'Clean Code',           desc: 'Readable, maintainable, purposeful — code that future-you will thank present-you for.' },
            { Icon: Palette,  title: 'Creative Design',      desc: 'Visual craft that goes beyond aesthetics: every pixel earns its place.' },
            { Icon: Sparkles, title: 'Attention to Detail',  desc: 'The difference between good and great lives in the spaces most people skip.' },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="icon-card">
              <div className="icon-card-badge"><Icon size={17} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}