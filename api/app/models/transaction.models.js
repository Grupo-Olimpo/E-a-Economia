module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("Transaction", {
        userId: {
            type: Sequelize.BIGINT,
            field: 'userId',
        },
        name: {
            type: Sequelize.STRING,
            field: 'str_name',
            defaultValue: 'Gasto'
        },
        description: {
            type: Sequelize.STRING,
            field: 'str_description',
            defaultValue: ''
        },
        date: {
            type: Sequelize.STRING,
            field: 'str_date',
            defaultValue: '01/01/2000'
        },
        amount: {
            type: Sequelize.FLOAT,
            field: 'amount',
            defaultValue: 0
        }
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