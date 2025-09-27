import './App.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { IoHelpCircle } from "react-icons/io5";


function App() {

  return (
    <div className="showcase">
      <div className="main-content">
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
            <a href="https://luma.com/treehouse.place" target="_blank" rel="noopener noreferrer" id="lock-in-button">LOCK IN?</a>
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

      <section className="who-we-are-section">
        <div className="who-we-are-content">
          <h2><IoHelpCircle /> who we are</h2>
          <p>
          ​Treehouse is a creative coworking space for side quests  and big dreams — whether you're a maker, artist, engineer, designer, writer, poet, or
          </p>
        </div>
      </section>
      <section className="how-it-works-section">
        <div className="how-it-works-content">
          <h2><IoHelpCircle /> how it works</h2>
          <p>
          Introduction Circle ​then a 50-minute work block, break time, another 50-minutes of work,and demos!
          </p>
        </div>
      </section>
      <section className="connect-with-us-section">
        <div className="connect-with-us-content">
          <h2>connect with us</h2>
          <p>
          we are part of the friends of socratica, a live co-working session at waterloo
          </p>
        </div>
      </section>
    </div>

  )
}

export default App
