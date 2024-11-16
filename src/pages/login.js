import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loadAccounts = () => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    return storedAccounts;
  };

  const [accounts, setAccounts] = useState(loadAccounts);

  const toggleForm = () => {
    setIsCreatingAccount(!isCreatingAccount);
    setUsername('');
    setPassword('');
    setNewUsername('');
    setNewPassword('');
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const user = accounts.find(
      (account) => account.username === username && account.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/account');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setError('');

    const existingAccount = accounts.find((account) => account.username === newUsername);

    if (existingAccount) {
      setError('Username already exists. Please choose a different username.');
      return;
    }

    const newAccount = { username: newUsername, password: newPassword };
    const updatedAccounts = [...accounts, newAccount];

    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
    setAccounts(updatedAccounts);

    alert('Account created successfully!');
    toggleForm();
  };

  return (
    <div style={styles.body}>
      <header>
        <nav style={styles.navbar}>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}><a href="#hero-section" style={styles.link}>Travels</a></li>
            <li style={styles.navItem}>
              <a href="#hero-section">
                <img src="Img/logo.png" style={styles.logo} alt="logo" />
              </a>
            </li>
            <li style={styles.navItem}><a href="about.html" style={styles.link}>About Us</a></li>
            <li style={styles.navItem}><a href="login.html" style={styles.link}>Login</a></li>
            <li style={styles.navItem}><a href="testimonials.html" style={styles.link}>Testimonials</a></li>
          </ul>
        </nav>
      </header>

      <div style={styles.formContainer}>
        {!isCreatingAccount ? (
          <div>
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                style={styles.input}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={styles.input}
              />
              <button type="submit" style={styles.submitBtn}>Login</button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
            <p>
              Don't have an account?{' '}
              <button style={styles.toggleLink} onClick={toggleForm}>Create New Account</button>
            </p>
          </div>
        ) : (
          <div>
            <h2 style={styles.heading}>Create Account</h2>
            <form onSubmit={handleCreateAccount}>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter new username"
                required
                style={styles.input}
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password (8 chars min)"
                required
                minLength="8"
                style={styles.input}
              />
              <button type="submit" style={styles.submitBtn}>Create Account</button>
            </form>
            <p>
              Already have an account?{' '}
              <button style={styles.toggleLink} onClick={toggleForm}>Login here</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#e0e0e0',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#1f1f1f',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: '#e0e0e0',
  },
  link: {
    color: '#e0e0e0',
    textDecoration: 'none',
  },
  logo: {
    width: '50px',
  },
  formContainer: {
    margin: '0 auto',
    position: 'relative',
    top: '20vh',
    height: '30vh',
    maxWidth: '400px',
    backgroundColor: '#1f1f1f',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
  },
  heading: {
    color: '#e0e0e0',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#2c2c2c',
    color: '#e0e0e0',
  },
  submitBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  toggleLink: {
    background: 'none',
    border: 'none',
    color: 'grey',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
  },
};

export default Login;
