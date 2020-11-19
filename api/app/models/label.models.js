module.exports = (sequelize, Sequelize) => {
    const Label = sequelize.define("label", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Label;
}