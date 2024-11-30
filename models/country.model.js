module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Country.associate = (models) => {
        Country.hasMany(models.CustomerAddress, {
            foreignKey: "country_id",
            as: "customerAddresses",
        })
    }
    return Country;
}