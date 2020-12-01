module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    name: { type: Sequelize.STRING, field: 'str_name' },
    email: { type: Sequelize.STRING, field: 'str_email' },
    password: { type: Sequelize.STRING, field: 'str_password' },
  }, {
    tableName: 'tb_user',
    freezeTableName: true,
    timestamps: true,

    createdAt: 'dt_created_at',
    updatedAt: 'dt_updated_at',
    deletedAt: 'dt_deleted_at',
  });
  

  return User;
}