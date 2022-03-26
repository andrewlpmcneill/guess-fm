import Marker from './Marker';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { useState } from 'react';
const mapsAPI = process.env.REACT_APP_GOOGLEMAPSAPIKEY;

export default function SimpleMap(props){
  const [country, setCountry] = useState("");
  const {coords, setCoords, assignCoords, gameData } = props;

  const defaultProps = {
    center: {
      lat: 43.65381,
      lng: -79.388055
    },
    zoom: 3
  };

  const getCountry = (lat, lng) => {
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=country&access_token=pk.eyJ1IjoiamltbXljaHVrdyIsImEiOiJjbDE3YTlhc2wwNzhvM2NyaXlwZjVtank3In0.agubTUs2njHSbkSy7T51cA
    `)
      .then(response => {
        response.data.features.length ? setCountry(response.data.features[0].properties.short_code) : setCountry('N/A');
      })
  }

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const onClick = mapsMouseEvent => {
    assignCoords([mapsMouseEvent.lat, mapsMouseEvent.lng])
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
          lat={gameData.coords[0]}
          lng={gameData.coords[1]}
          icon={'https://i.imgur.com/DGy99y0.png'}
          text={country}
        />
      </GoogleMapReact>
    </div>
  );
}