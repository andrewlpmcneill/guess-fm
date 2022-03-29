/* eslint-disable camelcase */
const { Sequelize, sequelize } = require("../models");
const db = require("../models");
const station = db.Station;

const randomStations = async (req, res) => {
  try {
    const randomStations = [];

    //retrieves three random stations
    const randomCountries = await station.findAll({
      attributes: ["country"],
      distinct: true,
      raw: true, //grabs only the data
      group: "country",
      having: sequelize.literal("COUNT(*) > 5"),
      order: Sequelize.literal("random()"),
      limit: 3,
    });

    //adds station data and appends to the array above
    await Promise.all(
      randomCountries.map(async (randomCountry) => {
        const randomStation = await station.findAll({
          where: {
            country: randomCountry.country,
          },
          raw: true,
          order: Sequelize.literal("random()"),
          limit: 1,
        });
        randomStations.push(randomStation[0]);
      })
    );

    res.json(randomStations);
  } catch (err) {
    console.log(err);
  }
};

const errorStations = (req, res) => {

  const errorStationsMockData = [
    {
      id: "ypD8btJF",
      station_title: "Radio 1 FM 93.2",
      mp3_link: "http://stream.okradio.kg:8000/mp3-hq?listening-from-radio-garden=1648322184",
      place_id: "5gooj9KL",
      city: "Tirana",
      country: "Albania",
      latitude: "41.327545",
      longitude: "19.818699",
      createdAt: null,
      updatedAt: null
    },
    {
      id: "ypD8btJF",
      station_title: "Radio 1 FM 93.2",
      mp3_link: "http://stream.okradio.kg:8000/mp3-hq?listening-from-radio-garden=1648322184",
      place_id: "5gooj9KL",
      city: "Tirana",
      country: "Albania",
      latitude: "41.327545",
      longitude: "19.818699",
      createdAt: null,
      updatedAt: null
    },
    {
      id: "ypD8btJF",
      station_title: "Radio 1 FM 93.2",
      mp3_link: "http://stream.okradio.kg:8000/mp3-hq?listening-from-radio-garden=1648322184",
      place_id: "5gooj9KL",
      city: "Tirana",
      country: "Albania",
      latitude: "41.327545",
      longitude: "19.818699",
      createdAt: null,
      updatedAt: null
    }
  ];

  res.json(errorStationsMockData);

};

const replaceStation = async (req, res) => {
  try {
    const country = req.body.country;

    const substituteStation = await station.findAll({
      where: {
        country: country,
      },
      raw: true,
      order: Sequelize.literal("random()"),
      limit: 1,
    });

    console.log(substituteStation);
    res.json(substituteStation);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { randomStations, replaceStation };
