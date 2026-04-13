import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-container flex items-center justify-center text-center animate-fade-in">
      <div>
        <p
          className="font-serif font-bold mb-4"
          style={{ fontSize: 'clamp(4rem, 15vw, 9rem)', color: 'hsl(var(--primary) / 0.15)', lineHeight: 1 }}
        >
          404
        </p>
        <h1 className="font-serif font-semibold text-2xl mb-3" style={{ color: 'hsl(var(--primary))' }}>
          Page not found
        </h1>
        <p className="text-muted-foreground text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          Looks like you wandered off the grid. Head back and try one of the hidden words.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-opacity hover:opacity-80"
          style={{
            background: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
          }}
        >
          ← Back to the puzzle
        </Link>
      </div>
    </div>
  )
}