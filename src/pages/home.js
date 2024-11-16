import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import '../styles/styles.css'

const images = [
  '/img/img1.jpg',
  '/img/img3.jpg',
  '/img/img4.jpg',
  '/img/img5.jpeg',
  '/img/kerala.jpeg',
  '/img/ladakh.jpeg',
];

const ImageGrid = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the current image every 3 seconds (adjustable)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      {/* Slider Section */}
      <div className="slider-container">
        {/* Top Row of 3 images */}
        <div className="row">
          <div
            className={`slider-item ${currentImageIndex === 0 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${images[0]})` }}
          ></div>
          <div
            className={`slider-item ${currentImageIndex === 1 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${images[1]})` }}
          ></div>
          <div
            className={`slider-item ${currentImageIndex === 2 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${images[2]})` }}
          ></div>
        </div>

        {/* Bottom Row of 3 images */}
        <div className="row">
          <div
            className={`slider-item ${currentImageIndex === 3 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${images[3]})` }}
          ></div>
          <div
            className={`slider-item ${currentImageIndex === 4 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${images[4]})` }}
          ></div>
          <div
            className={`slider-item ${currentImageIndex === 5 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${images[5]})` }}
          ></div>
        </div>

        {/* Text always visible in the middle of the screen */}
        <div className="slider-text">
          <h1>Welcome to WanderWise</h1>
          <p>Your Travel Adventure Begins Here</p>
        </div>
      </div>

      {/* New Text Section Below Slider */}
      <div className="text-section">
        <h2>Discover Your Next Adventure</h2>
        <p>
          From the majestic landscapes of Kerala to the rugged beauty of Ladakh, embark on a journey that will leave you speechless.
        </p>
      </div>

      {/* New Card Section Below Text */}
<div className="card-section">
  <div className="card card-large">
    <img src="/img/kerala.jpeg" alt="Kerala" className="card-image" />
    <div className="card-text">
      <h3>Kerala</h3>
      <p>Explore the backwaters, beaches, and mountains of Kerala.</p>
    </div>
  </div>
  <div className="card card-small">
    <img src="/img/ladakh.jpeg" alt="Ladakh" className="card-image" />
    <div className="card-text">
      <h3>Ladakh</h3>
      <p>Discover the high-altitude desert landscapes of Ladakh.</p>
    </div>
  </div>
  <div className="card card-large">
    <img src="/img/hampi.jpg" alt="Kerala" className="card-image" />
    <div className="card-text">
      <h3>Hampi</h3>
      <p>Roam beautiful temples.</p>
    </div>
  </div>
  <div className="card card-medium">
    <img src="/img/goa.jpeg" alt="Ladakh" className="card-image" />
    <div className="card-text">
      <h3>Goa</h3>
      <p>Enjoy the clean picturesque beaches and amazing marine sports of Goa.</p>
    </div>
  </div>
  <div className="card card-small">
    <img src="/img/gateway.jpg" alt="Ladakh" className="card-image" />
    <div className="card-text">
      <h3>GateWay</h3>
      <p>Pay respects to the soldiers and beauty of architecture.</p>
    </div>
  </div>
  <div className="card card-medium">
    <img src="/img/kerala.jpeg" alt="Kerala" className="card-image" />
    <div className="card-text">
      <h3>Kerala</h3>
      <p>Explore the backwaters, beaches, and mountains of Kerala.</p>
    </div>
  </div>
</div>

      {/* Internal CSS */}
      <style>{`


        .slider-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          position: relative;
          margin-top: 60px; /* Offset the slider from the Navbar */
        }

        .row {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 50%; /* Each row takes half the screen height */
        }

        .slider-item {
          width: 33.33%; /* Each div takes 1/3 of the row */
          height: 100%;
          background-color: black;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease;
          position: relative; /* To position the text */
        }

        .slider-item.visible {
          opacity: 1;
        }

        .slider-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 2; /* Ensure text is above all images */
        }

        .slider-text h1 {
          font-size: 3rem;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }

        .slider-text p {
          font-size: 1.5rem;
          font-family: 'Roboto Slab', serif;
        }

        /* New Text Section Below Slider */
        .text-section {
          padding: 50px 20px;
          text-align: center;
          color: white;
          font-size: 24px;
          font-weight: 400;
        }

        /* New Card Section Below Text */
        .card-section {
          display: flex;
          justify-content: space-around;
          gap: 20px;
          padding: 50px 20px;
        }

        .card {
          width: 300px;
          height: 400px;
          background-color: #2a2a2a;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05); /* Slight expansion effect */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }

        .card-image {
          width: 100%;
          height: 60%;
          object-fit: cover;
        }

        .card-text {
          padding: 10px;
          text-align: center;
        }

        .card-text h3 {
          color: white;
          font-size: 22px;
          margin-bottom: 10px;
        }

        .card-text p {
          color: #b0b0b0;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageGrid />
    </>
  );
};

export default Home;
