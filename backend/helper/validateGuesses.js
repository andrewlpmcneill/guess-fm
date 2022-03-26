const lookup = require("country-code-lookup");
const { getCompassDirection } = require("geolib");

//changes degrees to radian
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};


//calculates the distance between two coordinates
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};


//returns a validated guess object that contains information on the 
const validateGuess = (lat1, lng1, lat2, lng2, country1, country2) => {
  let distanceAway, guessCountry, direction, isCorrect;

  if (country1 === country2) {
    isCorrect = true;
    direction = ""
  } else {
    isCorrect = false;
    direction = getCompassDirection(
      // guess coords
      { latitude: lat2, longitude: lng2 },
      // answer coords
      // Latitude = longitude and longitude = latitude (RADIO GARDEN ERROR)
      { latitude: lat1, longitude: lng1 }
    );
  }
  distanceAway = Math.round(
    getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2)
  );
  guessCountry = lookup.byIso(country2).country; //display full name

  return {
    distanceAway: distanceAway,
    direction: direction,
    country: guessCountry,
    isCorrect: isCorrect
  };
};

module.exports = { validateGuess };
