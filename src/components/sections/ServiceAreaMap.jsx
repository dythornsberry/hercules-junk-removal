import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const serviceLocations = [
  { name: 'Kenmore (HQ)', coords: [47.7563, -122.2452], main: true },
  { name: 'Bothell', coords: [47.7601, -122.2056] },
  { name: 'Kirkland', coords: [47.6769, -122.2060] },
  { name: 'Lynnwood', coords: [47.8209, -122.3151] },
  { name: 'Lake Forest Park', coords: [47.7543, -122.2770] },
  { name: 'Shoreline', coords: [47.7560, -122.3457] },
];

// Approximate center point
const centerPosition = [47.7563, -122.2452];

const ServiceAreaMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based in Kenmore, we proudly serve our neighbors in Bothell, Kirkland, Lynnwood, and surrounding communities.
          </p>
        </div>

        <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 relative z-0">
           <MapContainer 
            center={centerPosition} 
            zoom={11} 
            scrollWheelZoom={false} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Main Service Area Circle (approximate 10 mile radius) */}
            <Circle 
              center={centerPosition}
              pathOptions={{ fillColor: '#facc15', color: '#facc15', opacity: 0.5, fillOpacity: 0.2 }}
              radius={12000} 
            />

            {serviceLocations.map((loc, idx) => (
              <Marker key={idx} position={loc.coords}>
                <Popup>
                  <span className="font-bold">{loc.name}</span>
                  <br />
                  {loc.main ? "Our Home Base" : "Service Area"}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;