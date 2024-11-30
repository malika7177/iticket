module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define("EventType", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_event_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    EventType.associate = (model) => {
        EventType.hasMany(model.Event, {
            foreignKey: "event_type_id",
            as: "events"
        })
    }
    return EventType;
}