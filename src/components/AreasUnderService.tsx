import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

// IMPORTANT: Fix for default marker icons not showing in React-Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// End of icon fix

const AreasUnderService = () => {
  // Coordinates for Birmingham (example)
  const birminghamCoords = [52.4862, -1.8904];
  const defaultZoom = 10;

  return (
    <section id="areas" className="py-8 md:py-12 w-full">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="bg-[#697669] rounded-2xl shadow-xl p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map Column */}
            <div className="order-1 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
                <MapContainer
                  center={birminghamCoords}
                  zoom={defaultZoom}
                  scrollWheelZoom={false}
                  className="h-64 sm:h-72 md:h-96 w-full z-0"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={birminghamCoords}>
                    <Popup>
                      Birmingham <br /> Area Under Service
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            {/* Text Content Column */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                Area Under Service
              </h2>
              <p className="text-gray-100 leading-relaxed text-base mb-3 md:mb-4">
                Engaging Security’s Team Of Experts Leverages Cutting-Edge Technology And Proven Methodologies To Deliver Proactive And Reliable Security Solutions Across These Dynamic Regions.
              </p>
              <p className="text-gray-100 leading-relaxed text-base">
                Engaging Security’s Reach Extends Across The Globe, With A Particular Focus On The Areas Highlighted In The Magnified Map. We Offer Comprehensive Security Solutions Throughout The United Kingdom, Ireland, And Neighboring Regions, Ensuring The Safety And Protection Of Our Clients’ Assets And Personnel Wherever They May Be. Our Global Presence Allows Us To Adapt To Diverse Security Challenges And Deliver Tailored Solutions That Meet The Unique Needs Of Each Client And Location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasUnderService;