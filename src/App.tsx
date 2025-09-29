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
            <p className="tagline">come inside and create with us</p>

            <div className="session-photos">
              <figure className="photo-placeholder">
                <img src="/about/about3.avif" alt="Team photo 3" className="photo" />
                <img src="/about/about1.avif" alt="Team photo 1" className="photo" />
                <img src="/about/about2.avif" alt="Team photo 2" className="photo" />

              </figure>
            </div>
            <div className="event-details">
              <div className="content-text">
                <p>Treehouse is a creative coworking space for side quests and big dreams—whether you're a maker, artist, engineer, designer, writer, poet, or somewhere in between. Everyone is welcome here.</p>
              </div>
              <div className="location-and-buttons">
                <div className="location-info">
                  <div className="location">
                    <FaLocationDot /> 
                    <span>SFU Surrey</span>
                  </div>
                  <div className="schedule">
                    <IoTime /> 
                    <span>Every Thursday | 5pm to 8pm</span>
                  </div>
                </div>
                <div className="action-buttons">
                  <a href="https://luma.com/treehouse.place" target="_blank" rel="noopener noreferrer" className="lock-in-button">
                    <span>Lock in with us</span>
                    <span className="lock-icon">🔒</span>
                  </a>
                  <button className="donate-button-main">Donate</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="who-we-are-section">
        <div className="who-we-are-content">
          <h2><IoHelpCircle /> who we are</h2>
          <div className="who-we-are-text-container">
            <p className="who-we-are-left">Treehouse is a creative</p>
            <p className="who-we-are-left">coworking space for side</p>
            <p className="who-we-are-left">quests and big dreams—</p>
            <p className="who-we-are-right">whether you're a maker,</p>
            <p className="who-we-are-right">artist, engineer, designer,</p>
            <p className="who-we-are-right">writer, poet, or</p>
            <p className="who-we-are-right">somewhere in between.</p>
          </div>
        </div>
      </section>
      <section className="how-it-works-section">
        <div className="how-it-works-content">
          <h2><IoHelpCircle /> how it works</h2>
          <div className="how-it-works-text-container">
            <div className="how-it-works-left">
              <div className="curved-text">
                <div className="text-arc top-arc">introduction</div>
                <div className="text-dots">• •</div>
                <div className="text-arc bottom-arc">circle</div>
              </div>
            </div>
            <div className="how-it-works-right">
              <div className="process-text">
                <span>then a</span>
                <span className="highlighted">50-minute</span>
                <span>work block,</span>
                <br/>
                <span>break time,</span>
                <br/>
                <span className="highlighted">50-minutes</span>
                <span>of work,</span>
                <br/>
                <span>and demos!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="connect-with-us-section">
        <div className="connect-with-us-content">
          <h2>connect with us</h2>
          <div className="connect-content">
            <div className="instagram-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#1C2629"/>
              </svg>
            </div>
            <div className="connect-text">
              <span>we are part of the </span>
              <span className="highlighted">friends of</span>
              <span> </span>
              <span className="underlined">socratica</span>
              <span>, a live co-working session at waterloo</span>
            </div>
          </div>
          <div className="connect-buttons">
            <button className="donate-button">Donate</button>
          </div>
        </div>
      </section>
    </div>

  )
}

export default App
