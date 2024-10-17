import React from 'react';
import './App.css';  // Import the CSS file from the same folder
import logo from './img/public/logo1520.png'
import bgvideo from './img/bgvideo.mp4'
import flipkartlogo from './img/public/flipkartlogo.jpeg'
import amazonlogo from "./img/public/amazonlogo1.png"
function App() {
  return (
    <div className="landing-page">
          <video autoPlay loop muted className="background-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Navbar Section */}
      <nav className="navbar">
      <img src={logo} alt="Company Logo" className="navbar-title" />  
        {/* <h1 className="navbar-title">Elyxian</h1>  Replace with your company name */}
      </nav>
      
      {/* Main Content */}
      <div className="content">
        <h1>We are launching soon!</h1>
        <p>Stay tuned for our exciting products.</p>
        <div className="marketplace-links">
           {/* Amazon Button */}
           <a
            href="https://www.amazon.in/Elyxian-Gluta-Vita-Face-Serum/dp/B0CZXQM1GK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn amazon-btn"
          >
            Buy on Amazon
          </a>

          {/* Flipkart Button */}
          <a
            href="https://www.flipkart.com/elyxian-gluta-vita-face-serum-30ml-glutathione-vitamin-c-kojic-hyaluronic-acid/p/itmc1ea4ce43727b?pid=BSTGZD8RJXG4GDG4&lid=LSTBSTGZD8RJXG4GDG41O05JN&marketplace=FLIPKART&cmpid=content_skin-treatment_8965229628_gmc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn flipkart-btn"
          >
            Buy on Flipkart
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
