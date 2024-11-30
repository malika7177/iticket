module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define("Status", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Status.associate = (models) => {
        Status.hasMany(models.Ticket, {
            foreignKey: "status_id",
            as: "tickets"
        });
        Status.hasMany(models.Cart, {
            foreignKey: "status_id",
            as: "carts"
        });
        Status.hasMany(models.Booking, {
            foreignKey: "status_id",
            as: "bookings"
        })
    }
    return Status;
}