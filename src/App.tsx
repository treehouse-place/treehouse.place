import './App.css'
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
// import { IoTime } from "react-icons/io5";
import { IoHelpCircle } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


function App() {
  useEffect(() => {
    if ((window as any).CircleType) {
      new (window as any).CircleType(document.getElementById("curved-text")).radius(200);
      new (window as any).CircleType(document.getElementById("curved-text-small")).radius(200).dir(-1);
    }
  }, []);

  return (
    <div className="showcase">
      <div className="main-content">
        {/* <section className="image-section">
          <div className="image-placeholder">
            <p>Treehouse Image</p>
          </div>
        </section> */}

        <section className="content-section">
          <div className="content-top">
            <div className="content-top-logos">
              <img src="/treehouse.svg" alt="Treehouse" className="treehouse-logo" />
            </div>
            <p className="tagline">come inside and create with us</p>
            <div className="event-details">
              <div className="location-and-buttons">
                <div className="location-info">
                  <div className="location">
                    <FaLocationDot /> 
                    <span>SFU Surrey</span>
                  </div>
                  <div className="schedule">
                    <span>Every Thursday | 5pm to 8pm</span>
                  </div>
                </div>
                <div className="action-buttons">
                  <a href="https://luma.com/treehouse.place" target="_blank" rel="noopener noreferrer" className="lock-in-button">
                    <span>Lock in with us</span>
                    <span className="lock-icon">🔒</span>
                  </a>
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
                <p id="curved-text">introduction circle</p>
                <div className="text-dots">• •</div>
              </div>
            </div>
            <div className="how-it-works-right">
              <div className="process-text">
                <span>then a</span>
                <span className="highlighted-green">50-minute</span>
                <span>work block,</span>
                <br/>
                <span>break time,</span>
                <br/>
                <span>another </span>
                <span className="highlighted-green">50-minutes</span>
                <span>of work,</span>
                <br/>
                <span>and demos!</span>
                <p>People connect better when they get to talk about what matters most to them. Treehouse is a space for you to make stuff that you care about, away from school and work.</p>
              </div>
            </div>           
          </div>
        </div>
      </section>
      <section className="connect-with-us-section">
        <div className="connect-with-us-content">
          <h2><IoMail /> connect with us</h2>
          <div className="connect-content">
            <div className="instagram-icon">
              <FaInstagram />
            </div>
            <div className="connect-text">
              <span>we are part of the </span>
              <span className="highlighted-green">friends of</span>
              <br></br>
              <span className="underlined highlighted-purple">socratica</span>
              <span>, a live co-working </span>
              <br></br>
              <span>session started at waterloo</span>
            </div>
          </div>
          <div className="connect-buttons">
            <button className="donate-button">Donate</button>
            <p id="curved-text-small">help us run our sessions</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default App
