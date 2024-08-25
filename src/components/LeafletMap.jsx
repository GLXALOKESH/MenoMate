import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';




let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  const redIcon = new L.Icon({
    iconUrl: 'https://www.nicepng.com/png/full/295-2955914_red-marker-on-map.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const redDot = new L.Icon({
    iconUrl: 'clipart1197083.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [18, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("Geolocation is supported.");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("User location retrieved:", position);
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setError(error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const markerPositions = [
    { position: [22.977289783866162, 88.43509744373867], popupText: 'Blue Icon', icon: blueIcon },
    { position: [22.97680404293688, 88.44723702330506], popupText: 'Blue Icon', icon: blueIcon },
    { position: [22.976392800847428, 88.45639031226035], popupText: 'Blue Icon', icon: blueIcon },
    { position: [22.96860012607137, 88.46579888833492], popupText: 'Blue Icon', icon: blueIcon },
    { position: [22.976367877674072, 88.43430503557374], popupText: 'Blue Icon', icon: blueIcon },
    { position: [22.97489732084098, 88.43455758220058], popupText: 'Blue Icon', icon: blueIcon },

    { position: [22.967002612316367, 88.43675522693736], popupText: 'Red Icon', icon: redIcon },
    { position: [22.97672256723008, 88.42997460273821], popupText: 'Red Icon', icon: redIcon },
    { position: [22.973008520633325, 88.43297867675048], popupText: 'Red Icon', icon: redIcon },
    { position: [22.970479749655297, 88.46619515225781], popupText: 'Red Icon', icon: redIcon },
    { position: [22.960680315313834, 88.4249964229464], popupText: 'Red Icon', icon: redIcon },
];
  

  return (
    <MapContainer 
      center={userLocation || [22.977289783866162, 88.43509744373867]} 
      zoom={13} 
      style={{ height: "100%", width: "100%" }}
      dragging={true}
      touchZoom={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
{markerPositions.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={marker.icon}>
                <Popup>
                    {marker.popupText}
                </Popup>
            </Marker>
        ))}
      {userLocation ? (
        <Marker position={userLocation} icon={redDot}>
          <Popup>You are here.</Popup>
        </Marker>
      ) : (
        error && <Popup position={[22.977289783866162, 88.43509744373867]}>{error}</Popup>
      )}
    </MapContainer>
  );
}

export default MapComponent;
