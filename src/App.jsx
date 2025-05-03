import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="content">
        <h1 className="band-name">The Style</h1>
        <a
          href="https://open.spotify.com/track/0c2bo6Tf19tK7XNyHJQKzB?si=5d753b67ac814d4e"
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-image-link"
        >
          <img src="/coverart.png" alt="Listen on Spotify" />
        </a>
      </div>
      <footer className="footer">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Contact</h3>
            <p>contact@the-style.us</p>
            <p>mporterbrown@gmail.com</p>
            <a
              href="https://open.spotify.com/track/0c2bo6Tf19tK7XNyHJQKzB?si=5d753b67ac814d4e"
              target="_blank"
              rel="noopener noreferrer">
                <p>Instagram</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
