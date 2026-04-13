import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const CONTACTS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: '@username',
    href: 'https://github.com/username',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/username',
  },
  {
    Icon: Twitter,
    label: 'Twitter / X',
    value: '@handle',
    href: 'https://twitter.com/handle',
  },
]

export default function Contact() {
  return (
    <div className="page-container animate-fade-in">
      <div className="max-w-lg mx-auto">
        <Link to="/" className="back-link">
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="animate-fade-in" style={{ animationDelay: '80ms' }}>
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle size={14} style={{ color: 'hsl(var(--accent))' }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">
              Get In Touch
            </span>
          </div>
          <h1 className="page-title mb-4" style={{ color: 'hsl(var(--accent))' }}>
            Contact
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
            I'm always open to interesting conversations, collaboration,
            or just a good chat about design and code. Pick your channel.
          </p>
        </div>

        <div
          className="notepad-card animate-scale-in space-y-2"
          style={{ animationDelay: '160ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          {CONTACTS.map(({ Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl group transition-all duration-150 hover:bg-muted"
              style={{ animationDelay: `${200 + i * 60}ms` }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-150"
                style={{
                  background: 'hsl(var(--accent) / 0.12)',
                  color: 'hsl(var(--accent))',
                }}
              >
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold truncate group-hover:text-accent transition-colors">
                  {value}
                </p>
              </div>
              <ArrowLeft
                size={14}
                className="text-muted-foreground group-hover:text-accent transition-colors rotate-180 flex-shrink-0"
              />
            </a>
          ))}
        </div>

        <p
          className="animate-fade-in text-center text-xs text-muted-foreground mt-6 italic"
          style={{ animationDelay: '500ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          I typically respond within 24 hours.
        </p>
      </div>
    </div>
  )
}