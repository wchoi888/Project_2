// models/User.js
module.exports = function (sequeilize, DataTypes) {
    const User = sequeilize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return User;
};