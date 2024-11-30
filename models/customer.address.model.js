module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Customers",
                key: "id"
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Countries",
                key: "id"
            },
        },
        region_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Regions",
                key: "id"
            },
        },
        district_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Districts",
                key: "id"
            },
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Flats",
                key: "id"
            },
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_index: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    CustomerAddress.associate = (models) => {
        CustomerAddress.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
        CustomerAddress.belongsTo(models.Country, {
            foreignKey: "country_id",
            as: "country",
        });
        CustomerAddress.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        CustomerAddress.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district",
        });
        CustomerAddress.belongsTo(models.Flat, {
            foreignKey: "flat_id",
            as: "flat",
        });
    }
    return CustomerAddress
}