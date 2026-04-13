import { Link } from 'react-router-dom'
import { ArrowLeft, Folder, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Interactive Portfolio',
    desc: 'A personal portfolio built around a word search puzzle — where the navigation itself is the experience.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    featured: true,
  },
  {
    title: 'Project Alpha',
    desc: 'An immersive 3D web experience with fluid animations, custom shaders, and scroll-driven storytelling.',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    featured: false,
  },
  {
    title: 'Project Beta',
    desc: 'A real-time collaborative platform with live cursors, presence indicators, and instant sync.',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
    featured: false,
  },
]

export default function Projects() {
  return (
    <div className="page-container animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="back-link">
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="animate-fade-in" style={{ animationDelay: '80ms' }}>
          <div className="flex items-center gap-2 mb-3">
            <Folder size={14} style={{ color: 'hsl(var(--secondary))' }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">
              Selected Work
            </span>
          </div>
          <h1 className="page-title mb-8" style={{ color: 'hsl(var(--secondary))' }}>
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="notepad-card group relative cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200 animate-scale-in"
              style={{
                animationDelay: `${160 + i * 80}ms`,
                opacity: 0,
                animationFillMode: 'forwards',
                borderColor: project.featured
                  ? 'hsl(var(--secondary) / 0.4)'
                  : 'hsl(var(--border))',
              }}
            >
              {project.featured && (
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{
                    background: 'hsl(var(--secondary) / 0.15)',
                    color: 'hsl(var(--secondary))',
                  }}
                >
                  Featured
                </span>
              )}

              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'hsl(var(--secondary) / 0.1)' }}
              >
                <ExternalLink size={14} style={{ color: 'hsl(var(--secondary))' }} />
              </div>

              <h3 className="font-serif font-semibold text-base mb-2 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: 'hsl(var(--muted))',
                      color: 'hsl(var(--muted-foreground))',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          className="animate-fade-in text-center text-xs text-muted-foreground mt-8 italic"
          style={{ animationDelay: '500ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          More projects coming soon…
        </p>
      </div>
    </div>
  )
}