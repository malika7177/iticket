module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sector_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Sectors", 
                key: "id"
            }
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_in_schema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Venues",
                key: "id"
            }
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "SeatTypes",
                key: "id"
            }
        }
    })
    Seat.associate = (models) => {
        Seat.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Seat.belongsTo(models.SeatType, {
            foreignKey: "seat_type_id",
            as: "seatType",
        });
        Seat.belongsTo(models.Sector, {
            foreignKey: "sector_id",
            as: "sector",
        });
        Seat.hasMany(models.Ticket, {
            foreignKey: "seat_id",
            as: "tickets",
        })
    }
    return Seat;
}