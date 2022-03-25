import Marker from './Marker';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { useState } from 'react';
const mapsAPI = process.env.REACT_APP_GOOGLEMAPSAPIKEY;

export default function SimpleMap(props){
  const [country, setCountry] = useState("");
  const {coords, setCoords} = props;

  const defaultProps = {
    center: {
      lat: 43.65381,
      lng: -79.388055
    },
    zoom: 3
  };

  const getCountry = (lat, lng) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=f89361fb753c9647ce4d1c6ca62fdc3c`)
      .then(response => {
        response.data[0] ? setCountry(response.data[0].country) : setCountry('N/A');
      })
  }

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const onClick = mapsMouseEvent => {
    setCoords([mapsMouseEvent.lat, mapsMouseEvent.lng]);
    getCountry(mapsMouseEvent.lat, mapsMouseEvent.lng);
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsAPI }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals = {true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={onClick}
        options={{
          gestureHandling:'greedy',
          zoomControlOptions: { position: 6 },
          streetViewControl:false,
          fullscreenControl:false,
        }}
      >
        <Marker
          lat={coords[0]}
          lng={coords[1]}
          icon={'https://i.imgur.com/DGy99y0.png'}
          text={country}
        />
      </GoogleMapReact>
    </div>
  );
}