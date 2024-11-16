import React, { useState, useEffect } from 'react';

const ItineraryPlanner = () => {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState({ destination: '', startDate: '', endDate: '', activities: [] });
  const [newActivity, setNewActivity] = useState('');

  // Load saved trips from localStorage on component mount
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(savedTrips);
  }, []);

  // Save trips to localStorage
  const saveTripsToLocalStorage = () => {
    localStorage.setItem('trips', JSON.stringify(trips));
  };

  // Handle trip form submission
  const handleAddTrip = (e) => {
    e.preventDefault();
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    setNewTrip({ destination: '', startDate: '', endDate: '', activities: [] });
    saveTripsToLocalStorage();
  };

  // Handle activity addition
  const handleAddActivity = () => {
    if (newActivity.trim() !== '') {
      const updatedTrip = { ...newTrip, activities: [...newTrip.activities, newActivity] };
      setNewTrip(updatedTrip);
      setNewActivity('');
    }
  };

  // Handle delete trip
  const handleDeleteTrip = (index) => {
    const updatedTrips = trips.filter((_, i) => i !== index);
    setTrips(updatedTrips);
    saveTripsToLocalStorage();
  };

  // Handle delete activity
  const handleDeleteActivity = (tripIndex, activityIndex) => {
    const updatedTrips = [...trips];
    updatedTrips[tripIndex].activities = updatedTrips[tripIndex].activities.filter((_, i) => i !== activityIndex);
    setTrips(updatedTrips);
    saveTripsToLocalStorage();
  };

  return (
    <div style={styles.container}>
      <h1>Itinerary Planner</h1>

      {/* Add new trip form */}
      <form onSubmit={handleAddTrip} style={styles.form}>
        <h2>Add a New Trip</h2>
        <input
          type="text"
          placeholder="Destination"
          value={newTrip.destination}
          onChange={(e) => setNewTrip({ ...newTrip, destination: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="date"
          value={newTrip.startDate}
          onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="date"
          value={newTrip.endDate}
          onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
          style={styles.input}
          required
        />
        <div>
          <input
            type="text"
            placeholder="Add activity"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            style={styles.input}
          />
          <button type="button" onClick={handleAddActivity} style={styles.addButton}>Add Activity</button>
        </div>
        <button type="submit" style={styles.addButton}>Save Trip</button>
      </form>

      {/* Display trips */}
      <div>
        <h2>Your Itinerary</h2>
        {trips.length === 0 ? (
          <p>No trips planned yet.</p>
        ) : (
          trips.map((trip, index) => (
            <div key={index} style={styles.trip}>
              <h3>{trip.destination}</h3>
              <p>{`Start Date: ${trip.startDate} | End Date: ${trip.endDate}`}</p>
              <h4>Activities:</h4>
              <ul>
                {trip.activities.map((activity, activityIndex) => (
                  <li key={activityIndex}>
                    {activity}
                    <button
                      onClick={() => handleDeleteActivity(index, activityIndex)}
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleDeleteTrip(index)}
                style={styles.deleteButton}
              >
                Delete Trip
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    top: '20vh',
    position: 'relative',
    height: '70vh'
  },
  form: {
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  trip: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#e9e9e9',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

export default ItineraryPlanner;
