import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>About WanderWise</h1>
        <p style={styles.tagline}>Your travel companion for unforgettable journeys!</p>
      </div>
      <div style={styles.contentContainer}>
        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Who We Are</h2>
          <p style={styles.sectionText}>
            At WanderWise, we are passionate about helping travelers explore India effortlessly. 
            From planning your dream vacation to discovering hidden gems, we provide tools and resources 
            that make your journeys more memorable and stress-free.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Our Mission</h2>
          <p style={styles.sectionText}>
            Our mission is to empower travelers with easy-to-use itinerary planning, personalized recommendations, 
            and seamless booking options. We believe that travel should be enjoyable from start to finish, 
            and we strive to make every journey as exciting as the destination itself.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Why Choose Us?</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Personalized travel itineraries tailored to your interests.</li>
            <li style={styles.listItem}>Expert recommendations for destinations, activities, and more.</li>
            <li style={styles.listItem}>User-friendly tools to organize your trips effortlessly.</li>
          </ul>
        </section>
      </div>
      <footer style={styles.footer}>
        <p>© 2024 WanderWise. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#161616',
    color: '#ffffff',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  header: {
    fontSize: '3rem',
    margin: '10px 0',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#bbbbbb',
  },
  contentContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '30px',
  },
  sectionHeader: {
    fontSize: '2rem',
    margin: '10px 0',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#dddddd',
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc',
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#dddddd',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '0.9rem',
    color: '#bbbbbb',
  },
};

export default AboutUs;
