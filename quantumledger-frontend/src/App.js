import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Dashboard Component
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tokenPrices, setTokenPrices] = useState([]);
  const [apiData, setApiData] = useState(null); // State for new API data

  const cardData = [
    {
      title: 'Total Transactions',
      value: '1,234',
      change: '+12.3% from last month',
      icon: '📈',
    },
    {
      title: 'Active Wallets',
      value: '567',
      change: '+5.7% from last month',
      icon: '👥',
    },
    {
      title: 'Gas Usage',
      value: '890 ETH',
      change: '-3.2% from last month',
      icon: '⛽',
    },
  ];

  const handleAnalyze = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, Math.random() * (3000 - 1000) + 1000);
  };

  const fetchTokenPrices = async () => {
    try {
      const response = await fetch('http://localhost:5000/token-prices');
      const data = await response.json();
      setTokenPrices(data);
    } catch (error) {
      console.error('Error fetching token prices:', error);
    }
  };

  // New function to fetch data from /api/data
  const fetchApiData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const json = await response.json();
      setApiData(json.message);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  // Fetch API data using process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/data`)
      .then(response => response.json())
      .then(data => setApiData(data.message))
      .catch(error => console.error('Error fetching API data:', error));
  }, []);

  return (
    <div className="dashboard">
      <div className="search-card">
        <div className="search-form">
          <input
            type="text"
            className="input"
            placeholder="Enter wallet address (0x...)"
          />
          <button
            className="button"
            onClick={handleAnalyze}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner">⟳</span>
                Analyzing...
              </>
            ) : (
              'Analyze'
            )}
          </button>
        </div>
      </div>

      <div className="card-grid">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div className="card-title">{card.title}</div>
              <div>{card.icon}</div>
            </div>
            <div className="card-value">{card.value}</div>
            <div className="card-change">{card.change}</div>
          </div>
        ))}
      </div>

      <div className="token-prices">
        <button onClick={fetchTokenPrices}>Get Token Prices</button>
        <ul>
          {tokenPrices.map((token, index) => (
            <li key={index}>
              {token.name}: ${token.price}
            </li>
          ))}
        </ul>
      </div>

      {/* New section to display API data */}
      <div className="api-data">
        <h2>API Data:</h2>
        <p>{apiData ? apiData : 'Loading API Data...'}</p>
      </div>
    </div>
  );
};

// Features Component
const Features = () => {
  return (
    <div className="features-container">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Real-time Analytics</h3>
          <p>Track blockchain transactions and metrics in real-time</p>
        </div>
        <div className="feature-card">
          <h3>Wallet Tracking</h3>
          <p>Monitor multiple wallet addresses and their activities</p>
        </div>
        <div className="feature-card">
          <h3>Token Analysis</h3>
          <p>Detailed analysis of token movements and prices</p>
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="email" placeholder="Your Email" className="input" />
        <textarea placeholder="Your Message" className="input" rows="4"></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
};

// Home Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to QuantumLedger</h1>
        <p className="hero-description">
          Your all-in-one blockchain analytics and governance platform
        </p>
        <button className="button" onClick={() => navigate('/dashboard')}>
          Get Started
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-container">
            <div className="nav-content">
              <Link to="/" className="logo">QuantumLedger</Link>
              <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/features" className="nav-link">Features</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
