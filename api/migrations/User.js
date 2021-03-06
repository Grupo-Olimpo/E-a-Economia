'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_user', {
      id:{  type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },
      str_name: { type: Sequelize.STRING },
      str_email: { type: Sequelize.STRING },
      str_password: { type: Sequelize.STRING },

      dt_created_at: { type: Sequelize.DATE },
      dt_updated_at: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tb_user');
  },
};