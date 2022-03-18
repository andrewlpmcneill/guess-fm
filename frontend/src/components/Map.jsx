import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
const mapsAPI = process.env.REACT_APP_GOOGLEMAPSAPIKEY;

const Marker = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props){

  const [coords, setCoords] = useState([]);
  const [country, setCountry] = useState('');

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const getCountry = (lat, lng) => {
    axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=f89361fb753c9647ce4d1c6ca62fdc3c`)
      .then(response => {

        setCountry(response.data[0].country);

      })
  }

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const onClick = mapsMouseEvent => {
    // console.log(mapsMouseEvent.lat, mapsMouseEvent.lng);
    setCoords([mapsMouseEvent.lat, mapsMouseEvent.lng])
    getCountry(mapsMouseEvent.lat, mapsMouseEvent.lng)
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsAPI }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals = {true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={onClick}
      >
        <Marker
          lat={coords[0]}
          lng={coords[1]}
          text={country}

        />
      </GoogleMapReact>
    </div>
  );
}