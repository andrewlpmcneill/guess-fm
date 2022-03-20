const { Sequelize } = require('../models')
const db = require('../models')
const Station = db.Station;

//grabs five random stations
const randomStations = async(req, res) => {
  try{
    const myRandomStations = await Station.findAll({
      // attributes:[
      //   [Sequelize.fn('DISTINCT', Sequelize.col('country')), 'country']
      // ],
      raw: true, //grabs only the data
      order: Sequelize.literal('random()'),
      where:{
  
      },
      limit: 5
    })

    res.json(myRandomStations)

  }catch(err){
    console.log(err)
  }

}

module.exports = { randomStations }