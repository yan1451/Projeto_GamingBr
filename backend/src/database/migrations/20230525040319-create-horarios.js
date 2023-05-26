'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('horarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'restaurantes',
          key: 'id'
        }
      },
      segunda: {
        type: Sequelize.STRING
      },
      terca: {
        type: Sequelize.STRING
      },
      quarta: {
        type: Sequelize.STRING
      },
      quinta: {
        type: Sequelize.STRING
      },
      sexta: {
        type: Sequelize.STRING
      },
      sabado: {
        type: Sequelize.STRING
      },
      domingo: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('horarios');
  }
};