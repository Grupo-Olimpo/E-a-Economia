module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("Transaction", {
        userId:{type: sequelize.BIGINT, field: 'userId'},
        name: { type: sequelize.STRING, field: 'str_name' },
        description: { type: sequelize.STRING, field: 'str_description' },
        date: { type: sequelize.STRING, field: 'str_date' }
    }, {
        tableName: 'tb_transaction',
        freezeTableName: true,
        timestamps: true,

        createdAt: 'dt_created_at',
        updatedAt: 'dt_updated_at',
        deletedAt: 'dt_deleted_at',
    });


    return Transaction;
}