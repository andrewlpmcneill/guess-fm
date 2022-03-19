'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Round.init({
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    station_id: DataTypes.INTEGER,
    result: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};