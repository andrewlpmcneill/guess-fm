'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id',
        },
        onDelete: 'CASCADE'
      },
      game_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Games',
          key:'id',
        },
        onDelete: 'CASCADE'
      },
      station_id: {
        type: Sequelize.STRING,
        references:{
          model:'Stations',
          key:'id',
        },
        onDelete: 'CASCADE'
      },
      result: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rounds');
  }
};