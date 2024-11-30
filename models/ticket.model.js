module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Events",
                key: "id"
            },
        },
        seat_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: "Seats",
                key: "id"
            },
        },
        status_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Statuses",
                key: "id"
            },
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        service_fee: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ticket_type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "TicketTypes",
                key: "id"
            }
        }
    })
    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Event, {
            foreignKey: "event_id",
            as: "event",
        })
        Ticket.belongsTo(models.Seat, {
            foreignKey: "seat_id",
            as: "seat",
        }),
        Ticket.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "status",
        }),
        Ticket.belongsTo(models.TicketType, {
            foreignKey: "ticket_type_id",
            as: "ticketType",
        });
        Ticket.hasMany(models.Cart, {
            foreignKey: "ticket_id",
            as: "carts",
        })
    }
    return Ticket;
}