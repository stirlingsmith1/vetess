import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function JobCenterMap() {
  const centers = [
    {
      id: 1,
      name: 'American Job Center',
      lat: 35.0844,
      lng: -106.6504,
      address: 'Albuquerque, NM',
    },
  ]

  return (
    <div className="w-full h-[500px] rounded-3xl overflow-hidden">
      <MapContainer
        center={[35.0844, -106.6504]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {centers.map((center) => (
          <Marker
            key={center.id}
            position={[center.lat, center.lng]}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{center.name}</h3>
                <p>{center.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}