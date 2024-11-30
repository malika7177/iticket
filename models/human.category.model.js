module.exports = (sequelize, DataTypes) =>{
    const HumanCategory = sequelize.define("HumanCategory", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_age: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        finish_age: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Genders",
                key: "id"
            },
        },
    });
    HumanCategory.associate = (models) => {
        HumanCategory.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender",
        });
        HumanCategory.hasMany(models.Event, {
            foreignKey: "human_category_id",
            as: "events",
        })
    }
    return HumanCategory;
}