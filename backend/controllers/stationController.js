const { Sequelize, sequelize } = require('../models');
const db = require('../models');
const station = db.Station;


const randomStations = async(req, res) => {
  try {
    const randomStations = [];

    //retrieves three random stations
    const randomCountries = await (station).findAll({
      attributes:['country'],
      distinct: true,
      raw: true, //grabs only the data
      group: 'country',
      having: sequelize.literal('COUNT(*) > 5'),
      order: Sequelize.literal('random()'),
      limit: 3
    });

    //adds station data and appends to the array above
    await Promise.all(
      randomCountries.map( async (randomCountry) => {
        const randomStation = await (station).findAll({
          where:{
            country: randomCountry.country
          },
          raw: true,
          order: Sequelize.literal('random()'),
          limit: 1
        })
        randomStations.push(randomStation[0]);
      })
    )
    
    res.json(randomStations)


  } catch (err) {
    console.log(err);
  }

};

module.exports = { randomStations };

