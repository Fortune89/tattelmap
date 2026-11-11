
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>📍</span>
        <span>ExploreLboro</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
