import { useState } from 'react'
import './App.css'

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
          <img src="/treehouse.svg" alt="Treehouse" className="treehouse-logo" />
          <p>come inside and create with us</p>

          <div className="session-photos">
            <figure className="photo-placeholder">
              <img src="/about/about3.avif" alt="Team photo 3" className="photo" />
              <img src="/about/about1.avif" alt="Team photo 1" className="photo" />
              <img src="/about/about2.avif" alt="Team photo 2" className="photo" />

            </figure>
          </div>
          <p>
            Coworking space for passion projects and big dreams.
          </p>
          <h3>SFU Surrey
          </h3>
          <p>Every Thursday | 5pm to 8pm</p>
        </div>

        <div className="content-bottom">


        </div>
      </section>
    </div>

  )
}

export default App
