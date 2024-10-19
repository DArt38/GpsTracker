import React, { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import "../App.css";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapView = () => {
  const [markers, setMarkers] = useState([
    { lat: 2.476899, lng: -76.560535, title: "Aqui estamos" },
  ]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/coordinates`);
        const data = await response.json();

        if (data.latitude && data.longitude) {
          setMarkers(currentMarkers => [
            ...currentMarkers,
            { lat: data.latitude, lng: data.longitude, title: "Nuevo Marcador" }
          ]);
        }

      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    // Llama a la función cada X tiempo para actualizar en tiempo real
    const interval = setInterval(fetchCoordinates, 10000); // Cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "60vw", height: "40vh" }}
        defaultCenter={{ lat: 2.43892, lng: -76.6134 }}
        defaultZoom={7}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index + marker.lat + marker.lng} // Clave única
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
            icon={{
              scale: 9,
              path: "M 0,0 L 1,0 L 0.5,1 Z",
              fillColor: "red"
            }}
          />
        ))}
      </Map>
    </APIProvider>
  );
};

export default MapView;
