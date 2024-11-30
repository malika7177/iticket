module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Carts",
                key: "id"
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        finishedAt: {
            type: DataTypes.DATE
        },
        payment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Payments",
                key: "id"
            }
        },
        delivery_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Deliveries",
                key: "id"
            }
        },
        discount_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Discounts",
                key: "id"
            }
        },
        status_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Statuses",
                key: "id"
            }
        }
    })
    
    Booking.associate = (models) => {
        Booking.belongsTo(models.Cart, {
            foreignKey: "cart_id",
            as: "cart",
        });
        Booking.belongsTo(models.Payment, {
            foreignKey: "payment_id",
            as: "payment",
        });
        Booking.belongsTo(models.Delivery, {
            foreignKey: "delivery_id",
            as: "delivery",
        });
        Booking.belongsTo(models.Discount, {
            foreignKey: "discount_id",
            as: "discount",
        });
        Booking.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "status",
        });
    }
    return Booking;
}