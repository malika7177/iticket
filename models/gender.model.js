module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Gender.associate = (models) => {
        Gender.hasMany(models.HumanCategory, {
            foreignKey: "gender_id",
            as: "human_categories",
        });
        Gender.hasMany(models.Customer, {
            foreignKey: "gender_id",
            as: "customers",
        })
    }
    return Gender;
}