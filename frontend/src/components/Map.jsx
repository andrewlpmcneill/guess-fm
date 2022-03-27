import Marker from "./Marker";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import { useState } from "react";
const mapsAPI = process.env.REACT_APP_GOOGLEMAPSAPIKEY;

export default function SimpleMap(props) {
  const [country, setCountry] = useState("");
  const { assignCoords, gameData } = props;

  const worldBounds = {
    north: 85.00,
    south: -85.00,
    west: -180.00,
    east: 180.00
  }

  const bounds = {
    latLngBounds: worldBounds,
    strictBounds: true
  };

  const styles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ];

  const defaultProps = {
    center: {
      lat: 43.65381,
      lng: -79.388055,
    },
    zoom: 3,
  };
  const getCountry = (lat, lng) => {
    return axios
      .get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=f89361fb753c9647ce4d1c6ca62fdc3c`
      )
      .then((response) => {
        response.data[0]
          ? setCountry(response.data[0].country)
          : setCountry("N/A");
      });
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const onClick = (mapsMouseEvent) => {
    assignCoords([mapsMouseEvent.lat, mapsMouseEvent.lng]);
    getCountry(mapsMouseEvent.lat, mapsMouseEvent.lng);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsAPI }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={onClick}
        options={{
          gestureHandling: "greedy",
          zoomControlOptions: { position: 6 },
          streetViewControl: false,
          fullscreenControl: false,
          restriction: bounds,
          styles: styles
        }}
      >
        <Marker
          lat={gameData.coords[0]}
          lng={gameData.coords[1]}
          icon={"https://i.imgur.com/DGy99y0.png"}
          text={country}
        />
      </GoogleMapReact>
    </div>
  );
}
