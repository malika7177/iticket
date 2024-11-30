module.exports = (sequelize, DataTypes) => {
    const Language = sequelize.define("Language", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Language.associate = (models) => {
        Language.hasMany(models.Event, {
            foreignKey: 'language_id',
            as: 'events',
        });
        Language.hasMany(models.Customer, {
            foreignKey: 'language_id',
            as: 'customers',
        })
    }
    return Language;
} 