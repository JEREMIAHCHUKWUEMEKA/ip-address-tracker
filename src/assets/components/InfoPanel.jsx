// src/components/InfoPanel.jsx
import './InfoPanel.css';

function InfoPanel({ data }) {
  const { ip, isp, location } = data;

  return (
    <div className="info-panel">
      <div className="info-box">
        <h4>IP ADDRESS</h4>
        <p>{ip}</p>
      </div>
      <hr />
      <div className="info-box">
        <h4>LOCATION</h4>
        <p>{location.city}, {location.region}</p>
      </div>
       <hr />
      <div className="info-box">
        <h4>TIMEZONE</h4>
        <p>UTC {location.timezone}</p>
      </div>
       <hr />
      <div className="info-box">
        <h4>ISP</h4>
        <p>{isp}</p>
      </div>
    </div>
  );
}

export default InfoPanel;
