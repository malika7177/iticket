module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Payment.associate = (models) => {
        Payment.hasMany(models.Booking, {
            foreignKey: 'payment_id',
            as: 'bookings'
        })
    }
    return Payment;
}