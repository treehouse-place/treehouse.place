import './App.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";


function App() {

  return (
    <div className="showcase">
      <section className="image-section">
        <div className="image-placeholder">
          <p>Treehouse Image</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-top">
          <div className="content-top-logos">
            <img src="/about/branch1.svg" alt="Branch 1" className="branch-logo" />
            <img src="/treehouse.svg" alt="Treehouse" className="treehouse-logo" />
            <img src="/about/branch2.svg" alt="Branch 2" className="branch-logo" />
          </div>

          <div className="session-photos">
            <figure className="photo-placeholder">
              <img src="/about/about3.avif" alt="Team photo 3" className="photo" />
              <img src="/about/about1.avif" alt="Team photo 1" className="photo" />
              <img src="/about/about2.avif" alt="Team photo 2" className="photo" />

            </figure>
          </div>
          <p className="content-text">
            We host weekly coworking sessions for side quests
            and big dreams — whether you're a maker, artist, engineer,
            designer, writer, poet, or somewhere in between.
            Everyone is welcome here.
          </p>
          <p>

          <button id="lock-in-button">LOCK IN?</button>
          </p>
          
          <div className="location-time">
            <span>
              <FaLocationDot /> 
              <span>SFU Surrey</span>
            </span>
            <span>
              <IoTime /> 
              <span>Thursday, 5-8pm</span>
            </span>
          </div>
        </div>
      </section>
    </div>

  )
}

export default App
