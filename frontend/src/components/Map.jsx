import React, {useState} from "react";
import Marker from './Marker'
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
import { getCompassDirection } from 'geolib'
import { getToolbarUtilityClass } from "@mui/material";
const lookup = require('country-code-lookup')
const mapsAPI = process.env.REACT_APP_GOOGLEMAPSAPIKEY;

export default function SimpleMap(props){

  const [coords, setCoords] = useState([]);
  const [country, setCountry] = useState('');

  const defaultProps = {
    center: {
      lat: 43.65381,
      lng: -79.388055
    },
    zoom: 3
  };

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  // function radians(n) {
  //   return n * (Math.PI / 180);
  // }
  // function degrees(n) {
  //   return n * (180 / Math.PI);
  // }
  
  // function getBearing(startLat,startLong,endLat,endLong){
  //   startLat = radians(startLat);
  //   startLong = radians(startLong);
  //   endLat = radians(endLat);
  //   endLong = radians(endLong);
  
  //   var dLong = endLong - startLong;
  
  //   var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
  //   if (Math.abs(dLong) > Math.PI){
  //     if (dLong > 0.0)
  //        dLong = -(2.0 * Math.PI - dLong);
  //     else
  //        dLong = (2.0 * Math.PI + dLong);
  //   }
  
  //   return (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
  // }

  const getCountry = (lat, lng) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=f89361fb753c9647ce4d1c6ca62fdc3c`)
      .then(response => {
        props.setMapData({
          id: 1,
          // coords: coords,
          distanceAway: Math.round(getDistanceFromLatLonInKm(43.64, -79.37, lat, lng)),
          direction: getCompassDirection(
            { latitude: lat, longitude: lng },
            { latitude: 43.64, longitude: -79.37 }),
          country: lookup.byIso(response.data[0].country).country
        })
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