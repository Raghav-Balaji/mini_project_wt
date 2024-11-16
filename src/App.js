import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';  // Adjust path if needed
import Home from './pages/home';     // Adjust path if needed
import Testimonials from './pages/testimonials';  // Adjust path if needed
import Activities from './pages/activities.js';   // Adjust path if needed
import AboutUs from './pages/about.js';   // Adjust path if needed
import Login from './pages/login.js'; // Adjust path if needed           <Route path="/testimonials" element={<Testimonials />} />           <Route path="/about" element={<About />} />           <Route path="/login" element={<Login />} />          <Route path="/itinerary" element={<Itinerary />} />
import UserAccount from './pages/userAccount.js';
import ItineraryPlanner from './pages/itinerary.js'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/itinerary" element={<ItineraryPlanner />} /> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
