
import { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function ZoomTracker({ setZoom }: { setZoom: (zoom: number) => void }) {
  useMapEvents({
    zoomend: (event) => {
      setZoom(event.target.getZoom())
    },
  })

  return null
}

function Explore() {
  const [zoom, setZoom] = useState(13)
  const [category, setCategory] = useState('all')

  return (
    <div className="explore-page">
      <h1>Explore Loughborough 🗺️</h1>

      <p>
        Welcome! This is Loughborough Train Station.
        Your adventure begins now! 🚉✨
      </p>

      {/* Category filter buttons */}
      <div className="category-filters">
        <button onClick={() => setCategory('all')}>
          🌍 All Places
        </button>
        <button onClick={() => setCategory('cafes')}>
          ☕ Cafés
        </button>
        <button onClick={() => setCategory('arts')}>
          🎨 Arts & Culture
        </button>
        <button onClick={() => setCategory('parks')}>
          🌳 Parks
        </button>
        <button onClick={() => setCategory('shopping)')}>
          🛍️ Shopping
        </button>
      </div>

      <MapContainer
        center={[52.779, -1.205]}
        zoom={14}
        minZoom={13}
        maxZoom={18}
        maxBounds={[
          [52.745, -1.255],
          [52.795, -1.165],
        ]}
        maxBoundsViscosity={1.0}
        style={{ height: '500px', width: '100%' }}
      >
        <ZoomTracker setZoom={setZoom} />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Loughborough Train Station */}
        {category === 'all' && (
          <Marker position={[52.779, -1.195]}>
            <Tooltip>
              🚉 Loughborough Train Station
              <br />
              Your adventure starts here!
            </Tooltip>  
          </Marker>
        )}

        {/* Loughborough University */}
        {category === 'all' && (
          <Marker position={[52.765, -1.232]}>
            <Tooltip>
              🎓 Loughborough University
              <br />
              One of the UK's leading universities!
            </Tooltip>
          </Marker>
        )}  

      {/* Loughborough College */}
      {category === 'all' && (
        <Marker position={[52.771, -1.207]}>
          <Tooltip>
            🎓 Loughborough College
            <br />
            Discover campus facilities and student life!
          </Tooltip>
        </Marker>
      )}

        {/* Loughborough Town Centre */}
        {(category === 'all' || category === 'shopping') && (
          <Marker position={[52.7714, -1.2047]}>
            <Tooltip>
              🛍️ Loughborough Town Centre
             <br />
             Explore local shops, cafés, restaurants and more!
            </Tooltip>
          </Marker>
        )}  

        {/* Queen's Park */}
        {(category === 'all' || category === 'parks') && (
          <Marker position={[52.7688, -1.2085]}>
            <Tooltip>
              🌳 Queen's Park
             <br />
             A lovely green space with gardens and places to relax!
          </Tooltip>
        </Marker>
        )} 

        {/* Nina Café — visible at zoom level 15 or higher */}
        {zoom >= 15 && (category === 'all' || category === 'cafes') && (
          <Marker position={[52.77148, -1.20545]}>
            <Tooltip>
              ☕ Nina's Coffee Shop
              <br />
              32 High Street, Loughborough
            </Tooltip>

            <Popup>
              <div style={{ width: '220px', textAlign: 'center' }}>
                <h3>☕ Nina's Coffee Shop</h3>

                <p>
                  Discover this independent café in
                  Loughborough town centre.
                </p>

                <p>📍 32 High Street, LE11 2PZ</p>

                <img
                  src="/nina-cafe/32253.jpg"
                  alt="Outside Nina Café"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                />

                <img
                  src="/nina-cafe/32254.jpg"
                  alt="Inside Nina Café with seasonal decorations"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginTop: '8px',
                  }}
                />
              </div>
            </Popup>
          </Marker>
        )}

        {/* Sock Gallery — visible at zoom level 15 or higher */}
        {zoom >= 15 && (category === 'all' || category === 'arts') && (
          <Marker position={[52.77086, -1.20638]}>
            <Tooltip>🎨 Sock Gallery</Tooltip>

            <Popup>
              <div style={{ width: '220px', textAlign: 'center' }}>
                <h3>🎨 Sock Gallery</h3>

                <p>
                  Discover paintings, jewellery and creative
                  exhibitions in Loughborough!
                </p>

                <img
                  src="/gallery/pink-painting.jpg"
                  alt="Pink abstract painting photographed at Sock Gallery"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                />

                <img
                  src="/gallery/cat-painting.jpg"
                  alt="Painting featuring a black cat"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginTop: '8px',
                  }}
                />

                <img
                  src="/gallery/blue-necklace.jpg"
                  alt="Blue pendant necklace displayed at Sock Gallery"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginTop: '8px',
                  }}
                />
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}

export default Explore
