module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Districts",
                key: "id"
            }
        },
        region_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Regions",
                key: "id"
            }
        },
        venue_type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "VenueTypes",
                key: "id"
            }
        }
    });

    Venue.associate = (models) => {
        Venue.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district",
        });
        Venue.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        Venue.belongsTo(models.VenueType, {
            foreignKey: "venue_type_id",
            as: "VenueType",
        });
        Venue.hasMany(models.VenuePhoto, {
            foreignKey: "venue_id",
            as: "VenuePhotos",
        })
        Venue.hasMany(models.Event, {
            foreignKey: "venue_id",
            as: "events",   
        });
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seats",
        })
    };

    return Venue;
};