import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const CONTACTS = [
  { Icon:Mail,     label:'Email',     value:'hello@example.com',   href:'mailto:hello@example.com' },
  { Icon:Github,   label:'GitHub',    value:'@username',           href:'https://github.com/username' },
  { Icon:Linkedin, label:'LinkedIn',  value:'Connect with me',     href:'https://linkedin.com/in/username' },
  { Icon:Twitter,  label:'Twitter/X', value:'@handle',             href:'https://twitter.com/handle' },
]

export default function Contact() {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-inner">
        <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to home</Link>

        <div className="page-eyebrow">
          <MessageCircle size={13} style={{ color:'var(--accent)' }} />
          Get In Touch
        </div>
        <h1 className="page-title" style={{ color:'var(--accent)' }}>Contact</h1>
        <p className="contact-intro">I'm always open to interesting conversations, collaboration, or just a good chat about design and code. Pick your channel.</p>

        <div className="card animate-scale-in" style={{ animationDelay:'120ms', opacity:0, animationFillMode:'forwards' }}>
          <div className="contact-list">
            {CONTACTS.map(({ Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-row">
                <div className="contact-icon"><Icon size={16} /></div>
                <div>
                  <p className="contact-label">{label}</p>
                  <p className="contact-value">{value}</p>
                </div>
                <ArrowLeft size={14} className="contact-arrow" style={{ transform:'rotate(180deg)' }} />
              </a>
            ))}
          </div>
        </div>

        <p className="page-footnote animate-fade-in" style={{ animationDelay:'400ms', opacity:0, animationFillMode:'forwards' }}>
          I typically respond within 24 hours.
        </p>
      </div>
    </div>
  )
}