import "./Map.css";
import React, { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import from './Map.css';
// 23.791855971335192, 90.41864037546488
// 23.791912419482312, 90.41861087115821
const Map = () => {
  // const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const position = [ 23.791912419482312, 90.41861087115821];
  const markerIcon = new L.Icon({
    iconUrl: require("../../assets/map.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const mapRef = useRef();
  const ZOOM_LEVEL = 50;
  return (
    <div>
      <MapContainer
        className="map-container   "
        center={position}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          icon={markerIcon}
          position={position}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
