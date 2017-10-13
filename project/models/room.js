module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('room', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    });

    return model;
};
