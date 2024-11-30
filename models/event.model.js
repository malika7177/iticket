module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        finish_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finish_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        info: { 
            type: DataTypes.TEXT,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        event_type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "EventTypes",
                key: "id"
            }
        },
        human_category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "HumanCategories",
                key: "id"
            }
        },
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Venues",
                key: "id"
            }
        },
        language_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Languages",
                key: "id"
            }
        }
    })
    Event.associate = (models) => {
        Event.belongsTo(models.EventType, {
            foreignKey: "event_type_id",
            as: "eventType",
        });
        Event.belongsTo(models.HumanCategory, {
            foreignKey: "human_category_id",
            as: "humanCategory",
        });
        Event.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Event.belongsTo(models.Language, {
            foreignKey: "language_id",
            as: "language",
        });
        Event.hasMany(models.Ticket, {
            foreignKey: "event_id",
            as: "tickets",
        })
    }
    return Event;
}