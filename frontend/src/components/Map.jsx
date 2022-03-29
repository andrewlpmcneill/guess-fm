import Marker from "./Marker";
import GoogleMapReact from "google-map-react";

const mapsAPI = process.env.REACT_APP_GOOGLEMAPSAPIKEY;

export default function SimpleMap(props) {
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
    { elementType: "geometry", stylers: [{ color: "#292621" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#fff" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#C6CCB1" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ visibility: "off", color: "#9393C2"  }],
    },
    // visibility: "off"
    // color: "#9393C2"
    {
      featureType: "administrative.province",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ "color": "#D27478" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "off" }],
      // color: "#38414e"
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
      stylers: [{ visibility: "off" }],
      // color: "#2E2636"
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
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
      stylers: [{ color: "#6E6E80" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#252129" }],
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
    zoom: 4,
  };


  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const onClick = (mapsMouseEvent) => {
    assignCoords([mapsMouseEvent.lat, mapsMouseEvent.lng]);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        id="map"
        bootstrapURLKeys={{ key: mapsAPI }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={onClick}
        options={{
          gestureHandling: "greedy",
          zoomControlOptions: { position: 6, id: "zoomControl" },
          streetViewControl: false,
          fullscreenControl: false,
          restriction: bounds,
          styles: styles
        }}
      >

        <Marker
          lat={gameData.coords[0]}
          lng={gameData.coords[1]}
          name="My Marker"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
}
