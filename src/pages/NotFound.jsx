import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notfound-wrapper animate-fade-in">
      <div>
        <p className="notfound-number">404</p>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-desc">Looks like you wandered off the grid. Head back and try one of the hidden words.</p>
        <Link to="/" className="btn-primary">← Back to the puzzle</Link>
      </div>
    </div>
  )
}