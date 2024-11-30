const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Genders",
                key: "id"
            }
        },
        language_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Languages",
                key: "id"
            }
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }) 
    Customer.beforeSave(async (customer, options) => {
        if (customer.changed("hashed_password")) {
            customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10)
        }
    })
    Customer.associate = (models) => {
        Customer.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender",
        });
        Customer.belongsTo(models.Language, {
            foreignKey: "language_id",
            as: "language",
        });
        Customer.hasMany(models.CustomerCard, {
            foreignKey: "customer_id",
            as: "customerCards",
        });
        Customer.hasMany(models.CustomerAddress, {
            foreignKey: "customer_id",
            as: "customerAddresses",
        });
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "carts",
        })
    }
    return Customer;
}