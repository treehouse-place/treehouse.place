import './App.css'
import { useEffect } from "react";
import { IoHelpCircle } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function App() {
  useEffect(() => {
    if ((window as any).CircleType) {
      new (window as any).CircleType(document.getElementById("curved-text")).radius(200);
      const small = document.getElementById("curved-text-small");
      if (small) {
        // tighten tracking before/after CircleType runs
        small.style.letterSpacing = "-1em";   // tweak: -0.02em to -0.06em
        small.style.whiteSpace = "nowrap";
        new (window as any).CircleType(small).radius(150).dir(-1); // smaller than 300
      }
      const smallConnect = document.getElementById("connect-subtext-curved");
      if (smallConnect) {
        // tighten tracking before/after CircleType runs
        smallConnect.style.letterSpacing = "-0.04em";   // tweak: -0.02em to -0.06em
        smallConnect.style.whiteSpace = "nowrap";
        new (window as any).CircleType(smallConnect).radius(150).dir(-1); // smaller than 300
      }

    }
  }, []);

  useEffect(() => {
    if ((window as any).CircleType) {
      const el = document.getElementById("connect-subtext-curved");
      if (el) {
        el.style.whiteSpace = "nowrap";
        el.style.letterSpacing = "-0.04em"; // tighten a bit; tweak -0.02em..-0.06em

        new (window as any).CircleType(el)
          .radius(130)  // smaller = tighter curve
          .dir(1);      // 1 = curve downwards (smile turned upside-down)
      }
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
          <div className="content-top-logos">
            <div className="logo-container">
              <img src="/about/nodes6.svg" alt="Nodes" className="branch-logo-top" />
              <img src="/treehouse.svg" alt="Treehouse" className="treehouse-logo" />
            </div>
          </div>
          <div className="hero-text-container">
            <p className="hero-text">hosting weekly coworking sessions—</p>
            <p className="hero-text">come inside and create with us!</p>
          </div>
          <div className="action-buttons">
            <a href="/sessions" className="lock-in-button">
              <span>Lock in with us</span>
              <span className="lock-icon">🔒</span>
            </a>
          </div>
        </section>
      </div>

      <section className="who-we-are-section">
        <div className="who-we-are-content">
          <h2 className="section-title"><IoHelpCircle /> who we are</h2>
          <div className="who-we-are-text-container">
            <p className="who-we-are-intro">​Ideas grow better in the</p>
            <p className="who-we-are-left">treehouse — a creative</p>
            <p className="who-we-are-left">coworking space for</p>
            <p className="who-we-are-left">sidequests and big dreams—</p>
            <p className="who-we-are-right">for the artists, developers,</p>
            <p className="who-we-are-right">engineers, makers, and</p>
            <p className="who-we-are-right">everyone in between</p>
          </div>
          <img
            src="/about/pinkblocks.png"
            alt="Z Dimension Illustration"
            className="who-we-are-image"
          />
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="how-it-works-content">
          <div className="welcome-text-container">
          <p className="people-connect-text">everyone is welcome here  ☆  free snacks provided  ☆ the third space you never knew you needed  ☆  impromptu hangout after?</p>
          </div>
          <h2 className="section-title"><IoHelpCircle /> how it works</h2>
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
                <span className="highlighted-green">50 minute</span>
                <span>work block,</span>
                <br />
                <span>break time,</span>
                <br />
                <span>another </span>
                <span className="highlighted-green">50 minutes</span>
                <span>of work,</span>
                <br />
                <span>and demos!</span>
                <p className="people-connect-text">People connect better when they talk about what matters most to them. Treehouse is a space for you to make stuff that you care about, away from school and work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT WITH US */}
      <section className="connect-with-us-section">
        {/* the text/content block */}
        <div className="connect-with-us-content">
          <h2 className="section-title"><IoMail /> connect with us</h2>
          <div className="connect-content">
            <div className="instagram-stack">
              <p id="connect-subtext-curved" className="connect-subtext">our instagram here</p>
              <a
                href="https://www.instagram.com/thetreehouse.place/"   // <-- put your real IG URL
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon-link"
                aria-label="Open our Instagram"
              >
                <div className="instagram-icon">
                  <FaInstagram />
                </div>
              </a>
            </div>
            <div className="connect-text">
              <span>we are part of the </span>
              <span className="highlighted-green">friends of</span>

              <a href="https://socratica.info" target="_blank" rel="noopener noreferrer" className="underlined highlighted-purple">socratica</a>
              <span>, a live co-working </span>
              <span>session started at waterloo</span>
            </div>
          </div>

          {/* DONATE BUTTON - TEMPORARILY DISABLED DUE TO POSITIONING ISSUES */}
          {/* <div className="connect-buttons">
            <a href="https://www.socratica.com/donate" target="_blank" rel="noopener noreferrer">
              <button className="donate-button">Donate</button>
            </a>
            <p id="curved-text-small" className="donate-subtext">help us run our sessions</p>
          </div> */}
        </div>

        {/* the image sits as a sibling, absolutely positioned behind */}
        <img
          src="/about/blackgrid1.png"
          alt="Z Dimension Illustration"
          className="connect-image"
        />
        <a href="/origami-station" target="_blank" rel="noopener noreferrer" className="lock-in-button mystery-button">
          <span>Mystery button!</span>
        </a>
      </section>

    </div>
  )
}

export default App
