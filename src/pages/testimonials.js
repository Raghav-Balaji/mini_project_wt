import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "WanderWise gave me the structure I needed to travel. Highly recommend.",
      name: "Joker",
      location: "Karnataka",
      image: "/img/profile1.png", // Image for John
    },
    {
      quote: "I was able to customize my entire vacation itinerary easily. Fantastic experience!",
      name: "Batwoman",
      location: "Tamil Nadu",
      image: "/img/profile2.png", // Image for Jane
    },
    {
      quote: "The travel planner helped me create a trip to North India with everything mapped out.",
      name: "Priyanka",
      location: "Nagaland",
      image: "/img/profile3.png", // Image for Emily
    },
    {
      quote: "Incredible experience! I loved the ease of organizing my trips with this app.",
      name: "Jeevith",
      location: "Mumbai",
      image: "/img/profile4.png", // Image for Mike
    },
    {
      quote: "This app made my trip to Kerala unforgettable! I highly recommend it to every traveler.",
      name: "Doredaddy",
      location: "Maharashtra",
      image: "/img/profile2.png", // Image for Sarah
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.testimonialCard}>
        <div style={styles.testimonial}>
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} style={styles.image} />
          <p style={styles.quote}>"{testimonials[currentIndex].quote}"</p>
          <p style={styles.name}>{testimonials[currentIndex].name}</p>
          <p style={styles.location}>{testimonials[currentIndex].location}</p>
        </div>
        <div style={styles.buttonsContainer}>
          <button onClick={prevTestimonial} style={styles.arrowButton}>←</button>
          <button onClick={nextTestimonial} style={styles.arrowButton}>→</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '0 20px',
    color: '#fff',
    backgroundColor: '#161616', // Dark background
  },
  testimonialCard: {
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
  },
  
  testimonialCardHover: {
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
    }
  },
  testimonial: {
    marginBottom: '30px',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  quote: {
    fontStyle: 'italic',
  },
  name: {
    fontWeight: 'bold',
  },
  location: {
    fontSize: '0.9em',
    color: '#bbb',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    width: '100%',
    transform: 'translateY(-50%)',
  },
  arrowButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '30px',
    cursor: 'pointer',
    padding: '10px',
  },

};

export default Testimonials;
