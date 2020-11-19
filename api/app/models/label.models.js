module.exports = (sequelize, Sequelize) => {
    const Label = sequelize.define("label", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
        },
        color: {
            type: Sequelize.STRING(7),
            allowNull: false,
            defaultValue: 'ffffff',
        },
    });

    return Label;
}