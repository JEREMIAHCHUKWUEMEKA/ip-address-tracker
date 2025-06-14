// src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './assets/components/Header';
import InfoPanel from './assets/components/InfoPanel';
import MapView from './assets/components/MapView';
import Navbar from './assets/components/Navbar';
import './App.css';

function App() {
  const [ipData, setIpData] = useState(null);

  const fetchIPInfo = async (ip = '') => {
    try {
      const response = await axios.get('https://geo.ipify.org/api/v2/country,city', {
        params: {
          apiKey: import.meta.env.VITE_IPIFY_API_KEY,
          ipAddress: ip,
        },
      });
      setIpData(response.data);
    } catch (err) {
      console.error('Error fetching IP info:', err);
    }
  };

  useEffect(() => {
    fetchIPInfo(); // fetch current IP on first load
  }, []);

  return (
    <div className="app">
       <Navbar />
      <Header onSearch={fetchIPInfo} />
      {ipData && <InfoPanel data={ipData} />}
      {ipData && <MapView coords={ipData.location} />}
    </div>
  );
}

export default App;
