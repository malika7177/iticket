module.exports = (sequelize, DataTypes) => {
    const VenuePhoto = sequelize.define("VenuePhoto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Venues",
                key: "id",
            },
        },
    })
    VenuePhoto.associate = (models) => {
        VenuePhoto.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
    }
    return VenuePhoto;
}