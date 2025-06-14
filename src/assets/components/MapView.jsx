// src/assets/components/MapView.jsx
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// fix Leaflet default marker icon not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

// helper component to control map movement
function ChangeView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords?.lat && coords?.lng) {
      map.setView([coords.lat, coords.lng], 13);
    }
  }, [coords, map]);

  return null;
}

const MapView = ({ coords }) => {
  if (!coords) return null;

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={[coords.lat, coords.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <ChangeView coords={coords} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords.lat, coords.lng]}>
          <Popup>
            IP Location: [{coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}]
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
