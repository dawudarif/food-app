import { TileLayer, MapContainer } from "react-leaflet";

export default function MapComponent() {
  const position: [number, number] = [34.0522, -118.2437];

  return (
    <MapContainer
      scrollWheelZoom={false}
      center={position}
      zoom={12}
      style={{ height: "47.9375rem", width: "100%" }}
      className="leaflet-map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}
