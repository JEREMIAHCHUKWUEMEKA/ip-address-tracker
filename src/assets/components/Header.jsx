// src/assets/components/Header.jsx
import { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const [ip, setIp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ip) onSearch(ip);
    setIp('');
  };

  return (
    <header className="header">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <button type="submit">→</button>
      </form>
    </header>
  );
};

export default Header;
