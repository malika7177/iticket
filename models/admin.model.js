const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        is_creator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    Admin.beforeSave(async (admin, options)=> {
        if(admin.changed("password")) {
            admin.password = await bcrypt.hash(admin.password, 10)
        }
    })
    return Admin;
}