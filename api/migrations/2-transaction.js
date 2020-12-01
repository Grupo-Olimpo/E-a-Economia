'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_transaction', {

      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      str_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      str_description: { type: Sequelize.STRING },
      str_date: { type: Sequelize.STRING },

      dt_created_at: { type: Sequelize.DATE },
      dt_updated_at: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tb_transaction');


  }
};
