import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  // New state for account settings
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');
  const [gender, setGender] = useState('male');
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Get the logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Clear user session
    navigate('/'); // Redirect to login page
  };

  if (!user) {
    // If no user is logged in, redirect to login
    navigate('/');
    return null;
  }

  const handleInterestChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSaveSettings = () => {
    // Save settings locally (only for this session, no permanent storage)
    setSettingsSaved(true);
    setTimeout(() => {
      setSettingsSaved(false);
    }, 2000); // Hide success message after 2 seconds
  };

  // Language translations
  const translations = {
    English: {
      welcome: `Welcome, ${user.username}!`,
      accountDetails: 'Your account details are below:',
      profileDetails: 'Profile Details',
      accountSettings: 'Account Settings',
      recentActivities: 'Recent Activities',
      username: 'Username',
      email: 'Email',
      creationDate: 'Account created on:',
      selectOption: 'What would you like to see today?',
      profileDesc: 'Here are some additional details about your profile.',
      saveSettings: 'Save Settings',
      successMessage: 'Settings saved successfully!',
      currency: 'Currency:',
      language: 'Language:',
      gender: 'Gender:',
    },
    Kannada: {
      welcome: `ಸ್ವಾಗತ, ${user.username}!`,
      accountDetails: 'ನಿಮ್ಮ ಖಾತೆ ವಿವರಗಳು ಕೆಳಗಿನಂತಿವೆ:',
      profileDetails: 'ಪ್ರೊಫೈಲ್ ವಿವರಗಳು',
      accountSettings: 'ಖಾತೆ ಸೆಟ್ಟಿಂಗ್ಸ್',
      recentActivities: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಗಳು',
      username: 'ಬಳಕೆದಾರ ಹೆಸರು',
      email: 'ಇಮೇಲ್',
      creationDate: 'ಖಾತೆ ರಚನೆಯ ದಿನಾಂಕ:',
      selectOption: 'ನೀವು ಇಂದು ಏನು ನೋಡಲು ಇಚ್ಛಿಸುತ್ತೀರಿ?',
      profileDesc: 'ಇಲ್ಲಿ ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಬಗ್ಗೆ ಕೆಲವು ಹೆಚ್ಚುವರಿ ವಿವರಗಳಿವೆ.',
      saveSettings: 'ಸೆಟ್ಟಿಂಗ್ಸ್ ಉಳಿಸಿ',
      successMessage: 'ಸೆಟ್ಟಿಂಗ್ಸ್ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
      currency: 'ಮुद್ರಾ:',
      language: 'ಭಾಷೆ:',
      gender: 'ಲಿಂಗ:',
    },
    Hindi: {
      welcome: `स्वागत है, ${user.username}!`,
      accountDetails: 'आपकी खाता विवरण नीचे हैं:',
      profileDetails: 'प्रोफाइल विवरण',
      accountSettings: 'खाता सेटिंग्स',
      recentActivities: 'हाल की गतिविधियाँ',
      username: 'उपयोगकर्ता नाम',
      email: 'ईमेल',
      creationDate: 'खाता निर्माण तिथि:',
      selectOption: 'आप आज क्या देखना चाहेंगे?',
      profileDesc: 'यहां आपके प्रोफाइल के बारे में कुछ अतिरिक्त जानकारी है।',
      saveSettings: 'सेटिंग्स सहेजें',
      successMessage: 'सेटिंग्स सफलतापूर्वक सहेजी गई!',
      currency: 'मुद्रा:',
      language: 'भाषा:',
      gender: 'लिंग:',
    },
  };

  // Get translations for the selected language
  const t = translations[language];

  return (
    <div style={styles.container}>
      <h1 style={{ color: 'white' }}>{t.welcome}</h1>
      <p style={{ color: 'white' }}>{t.accountDetails}</p>

      <ul style={styles.detailsList}>
        <li><strong>{t.username}:</strong> {user.username}</li>
        <li><strong>{t.email}:</strong> {user.email || 'Not provided'}</li>
        <li><strong>{t.creationDate}:</strong> {user.creationDate || 'Not available'}</li>
      </ul>

      <p style={{ color: 'white' }}>{t.selectOption}</p>
      <select style={styles.selectBox} onChange={handleInterestChange}>
        <option value="">--Select an option--</option>
        <option value="profile">{t.profileDetails}</option>
        <option value="settings">{t.accountSettings}</option>
        <option value="activities">{t.recentActivities}</option>
      </select>

      {selectedOption === 'profile' && (
        <div style={styles.section}>
          <h3 style={{ color: 'white' }}>{t.profileDetails}</h3>
          <p style={{ color: 'white' }}>{t.profileDesc}</p>
        </div>
      )}

      {selectedOption === 'settings' && (
        <div style={styles.section}>
          <h3 style={{ color: 'white' }}>{t.accountSettings}</h3>
          <p style={{ color: 'white' }}>{t.accountSettings}</p>

          <div style={styles.settingGroup}>
            <label style={styles.label} htmlFor="currency">{t.currency}</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={styles.input}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <div style={styles.settingGroup}>
            <label style={styles.label} htmlFor="language">{t.language}</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={styles.input}
            >
              <option value="English">English</option>
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div style={styles.settingGroup}>
            <label style={styles.label} htmlFor="gender">{t.gender}</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label style={styles.radioLabel} htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label style={styles.radioLabel} htmlFor="female">Female</label>
            </div>
          </div>

          <button style={styles.saveBtn} onClick={handleSaveSettings}>
            {t.saveSettings}
          </button>

          {settingsSaved && (
            <p style={{ color: 'green', marginTop: '10px' }}>{t.successMessage}</p>
          )}
        </div>
      )}

      {selectedOption === 'activities' && (
        <div style={styles.section}>
          <h3 style={{ color: 'white' }}>{t.recentActivities}</h3>
          <p style={{ color: 'white' }}>{t.recentActivities}</p>
        </div>
      )}

      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
    position: 'relative',
    top: '20vh',
    backgroundColor: '#2C2F36', // Dark background
    padding: '20px',
    borderRadius: '10px',
  },
  detailsList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
    fontSize: '18px',
    color: 'white',
  },
  selectBox: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#161818',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  section: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#3a3f47', // Darker background for sections
  },
  settingGroup: {
    marginTop: '10px',
    textAlign: 'left',
  },
  label: {
    color: 'white',
    fontSize: '16px',
    marginRight: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#161818',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '5px',
  },
  radioLabel: {
    color: 'white',
    marginLeft: '10px',
    marginRight: '20px',
  },
  saveBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'black',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logoutBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'black',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserAccount;
