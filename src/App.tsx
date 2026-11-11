
import Footer from './components/Footer'
import universityPhoto from './images/loughborough-university.jpg'
import townPhoto from './images/loughborough-town.jpg'
import cafePhoto from './images/nina-cafe.jpg'
import { Routes, Route, Link } from 'react-router-dom'
import Explore from './Explore'
import About from './About'
import './App.css'
import Navbar from './components/Navbar'

function Home() {
  return (
    <div className="app">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Your new adventure starts in Loughborough</h1>

          <p>
            🎓 From your future campus to your first favourite cafe ☕,
            get to know the place you'll soon call home 🏡.
          </p>

          <p>
            📍 Explore Loughborough University,
            Loughborough College, restaurants 🍽️,
            shops 🛍️ and important places around town.
          </p>

          <Link to="/explore">
            <button type="button">
              Explore the Town →
            </button>
          </Link>
        </div>

        <div className="hero-photos">
          <div className="campus-photo">
            <img
              src={universityPhoto}
              alt="Hazlerigg Building at Loughborough University"
            />
          </div>

          <div className="town-photo">
            <img
              src={townPhoto}
              alt="Collage of Loughborough town"
            />
          </div>

          <div className="cafe-photo">
            <img
              src={cafePhoto}
              alt="Nina's Cafe in Loughborough"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
