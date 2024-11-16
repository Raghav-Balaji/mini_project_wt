import React, { useState } from 'react';

const Activities = () => {
  const allActivities = [
    {
      title: "Scuba Diving",
      description: "Explore the underwater world with a guided scuba diving session.",
      details: "Experience an unforgettable dive into the depths of the ocean, led by certified instructors.",
      cities: ["Lakshadweep", "Goa", "Pondicherry"],
      category: "Adventure",
      image: "/img/scubadiving.jpeg",
    },
    {
      title: "City Tour",
      description: "Discover iconic landmarks and local attractions with a guided city tour.",
      details: "Walk through history, culture, and modern wonders with experienced guides.",
      cities: ["Bangalore", "Delhi", "Mumbai"],
      category: "Sightseeing",
      image: "/img/citytours.jpeg",
    },
    {
      title: "Cooking Class",
      description: "Learn to cook authentic local dishes with experienced chefs.",
      details: "From appetizers to desserts, master traditional recipes in a fun environment.",
      cities: ["Chennai", "Kolkata", "Mumbai"],
      category: "Cultural",
      image: "/img/cooking.jpeg",
    },
    {
        title: "Mountain Hiking",
        description: "Embark on a thrilling trek through breathtaking mountain trails.",
        details: "Perfect for adventurers and nature enthusiasts, explore panoramic views and rugged terrains with guided hikes.",
        cities: ["lonavala", "Manali", "Munnar"],
        category: "Adventure",
        image: "/img/mountainhking.jpeg",
      },
      {
        title: "Cave Exploration",
        description: "Discover the hidden wonders of natural caves with expert guides.",
        details: "An exhilarating experience that takes you through stunning rock formations, underground rivers, and ancient secrets.",
        cities: ["Mulu", "Ellora", "Borra"],
        category: "Adventure",
        image: "/img/caves.jpeg",
      },
      {
        title: "Camping",
        description: "Reconnect with nature by spending nights under the stars in serene campgrounds.",
        details: "Enjoy campfires, storytelling, and peaceful surroundings in some of the world's best camping spots.",
        cities: ["kanatal", "Rishikesh", "jaisameler"],
        category: "Adventure",
        image: "/img/camping.jpeg",
      },
      {
        title: "Beach Relaxation",
        description: "Unwind on sandy shores and enjoy the soothing waves.",
        details: "Spend your day lounging under the sun, swimming in crystal-clear waters, and indulging in beachfront activities.",
        cities: ["Maldives", "Miami", "Phuket"],
        category: "Sightseeing",
        image: "/img/beach.jpeg",
      },
      {
        title: "Temple Exploration",
        description: "Discover the rich heritage and spiritual essence of ancient temples.",
        details: "Experience the architectural marvels, cultural stories, and serene vibes of sacred temples worldwide.",
        cities: ["Kyoto", "Angkor Wat", "Varanasi"],
        category: "Cultural",
        image: "/img/temple.jpeg",
      }
      
      
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities =
    selectedCategory === "All"
      ? allActivities
      : allActivities.filter((activity) => activity.category === selectedCategory);

  // Close the popup
  const closePopup = () => setSelectedActivity(null);

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>Plan Your Activities</h1>
      <p style={styles.subHeader}>
        Choose from a variety of activities to make your trip unforgettable!
      </p>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        {["All", "Adventure", "Sightseeing", "Cultural"].map((category) => (
          <button
            key={category}
            style={{
              ...styles.filterButton,
              ...(selectedCategory === category && styles.activeFilterButton),
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Activities List */}
      <div style={styles.activitiesContainer}>
        {filteredActivities.map((activity, index) => (
          <div
            key={index}
            style={styles.activityCard}
            onClick={() => setSelectedActivity(activity)}
          >
            <img src={activity.image} alt={activity.title} style={styles.activityImage} />
            <h3 style={styles.activityTitle}>{activity.title}</h3>
            <p style={styles.activityDescription}>{activity.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedActivity && (
        <div style={styles.popupOverlay} onClick={closePopup}>
          <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.popupTitle}>{selectedActivity.title}</h2>
            <img
              src={selectedActivity.image}
              alt={selectedActivity.title}
              style={styles.popupImage}
            />
            <p style={styles.popupDescription}>{selectedActivity.details}</p>
            <h4 style={styles.popupCitiesHeading}>Available in:</h4>
            <ul style={styles.popupCitiesList}>
              {selectedActivity.cities.map((city, idx) => (
                <li key={idx} style={styles.popupCity}>
                  {city}
                </li>
              ))}
            </ul>
            <button style={styles.closeButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#161616',
    color: '#fff',
    padding: '50px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#bbb',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  filterButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  activeFilterButton: {
    backgroundColor: '#f39c12',
    color: '#000',
  },
  activitiesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  activityCard: {
    backgroundColor: '#333',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    textAlign: 'left',
  },
  activityImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  activityTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '20px',
  },
  activityDescription: {
    fontSize: '1rem',
    color: '#bbb',
    margin: '0 20px 20px',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#222',
    borderRadius: '10px',
    color: '#fff',
    padding: '30px',
    width: '400px',
    textAlign: 'center',
    position: 'relative',
  },
  popupTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  popupImage: {
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  popupDescription: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  popupCitiesHeading: {
    fontSize: '1.5rem',
    margin: '20px 0',
  },
  popupCitiesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  popupCity: {
    fontSize: '1rem',
    marginBottom: '5px',
  },
  closeButton: {
    backgroundColor: '#f39c12',
    border: 'none',
    padding: '10px 20px',
    color: '#000',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Activities;
