module.exports = (sequelize, DataTypes) => {
    const Sector = sequelize.define("Sector", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Sector.associate = (models) => {
        Sector.hasMany(models.Seat, {
            foreignKey: "sector_id",
        })
    }
    return Sector;
};
