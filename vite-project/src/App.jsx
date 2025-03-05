import React, { useRef, useState } from "react";
import "./App.css";
import personalWebsGif from "./assets/gifs/PERSONAL WEBS (1).gif";
import Guestbook from "./Guestbook"; // Import Guestbook

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const guestbookRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navigation-buttons">
        <button onClick={() => scrollToSection(homeRef)} className="nav-button">Home</button>
        <button onClick={() => scrollToSection(aboutRef)} className="nav-button">About</button>
        <button onClick={() => scrollToSection(galleryRef)} className="nav-button">Gallery</button>
        <button onClick={() => scrollToSection(guestbookRef)} className="nav-button">Guestbook</button>
      </nav>

      <section ref={homeRef} className="section">
        <img src={personalWebsGif} alt="Personal Website GIF" className="home-gif" />
      </section>

      {/* 🔹 Section Divider */}
      <div className="section-divider"></div>

      {/* 🔹 About Me Section */}
      <section ref={aboutRef} className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p><strong>About Me:</strong> Software/Web Dev</p>
          <p><strong>Age:</strong> 19</p>
          <p><strong>Course:</strong> BSCS-SS</p>
          
          <h3>Education & Achievements</h3>
          <ul>
            <li>Fortnite Unreal</li>
            <li>High Honors Graduate</li>
          </ul>

          <h3>Hobbies & Interests</h3>
          <ul>
            <li>Game Dev</li>
            <li>Software Dev</li>
            <li>Artist</li>
            <li>Videogames</li>
            <li>Music</li>
          </ul>

          <h3>Goals in Life</h3>
          <p>Become a Software Dev/Artist.</p>
        </div>
      </section>

      {/* 🔹 Section Divider */}
      <div className="section-divider"></div>

      <section ref={galleryRef} className="section">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-main">
          <button className="gallery-arrow left" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>◀</button>
          <img src={images[currentIndex]} alt="Gallery" />
          <button className="gallery-arrow right" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>▶</button>
        </div>
      </section>

      {/* Guestbook Section */}
      <section ref={guestbookRef} className="section">
        <h2 className="section-title">Guestbook</h2>
        <Guestbook />
      </section>
    </>
  );
}

export default App;
