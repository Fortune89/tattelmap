import townHallPhoto from './images/34267.jpg'
import townCentrePhoto from './images/34269.jpg'
function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About ExploreLboro</h1>

        <p>
          Discover more. Explore further. Feel at home.
        </p>

        <p>
          Your guide to discovering Loughborough,
          its people, places and experiences.
        </p>
      </section>

      <section className="about-intro">
        <h2>Welcome to ExploreLboro</h2>

        <p>
          ExploreLboro is an interactive guide designed
          to help international students, new residents
          and visitors discover everything Loughborough
          has to offer.
        </p>
      </section>

<section className="discover-section">
  <h2>Discover Loughborough</h2>

  <p>
    From its historic buildings to its lively town centre,
    Loughborough has plenty of places to discover.
    Explore the town and get to know your new surroundings.
  </p>

  <div className="about-photos">
    <div className="about-photo-card">
      <img
        src={townHallPhoto}
        alt="Loughborough Town Hall"
      />
      <h3>Loughborough Town Hall</h3>
      <p>Discover the town's historic architecture and cultural spaces.</p>
    </div>

    <div className="about-photo-card">
      <img
        src={townCentrePhoto}
        alt="Loughborough town centre in the evening"
      />
      <h3>Loughborough Town Centre</h3>
      <p>Explore the shops, streets and atmosphere of the town.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
