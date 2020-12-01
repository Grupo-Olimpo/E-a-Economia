module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("Transaction", {
        userId:{type: Sequelize.BIGINT, field: 'userId'},
        name: { type: Sequelize.STRING, field: 'str_name' },
        description: { type: Sequelize.STRING, field: 'str_description' },
        date: { type: Sequelize.STRING, field: 'str_date' }
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