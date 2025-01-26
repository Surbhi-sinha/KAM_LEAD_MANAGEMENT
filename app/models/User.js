const {DataTypes , Sequelize} = require('sequelize');
const sequelize = require('../config/db');


const userDB = {};
const User = sequelize.define('User',{
      username : {type:DataTypes.STRING, allowNull :false},
      email : { type  :DataTypes.STRING , allowNull : false},
      password:{type : DataTypes.STRING, allowNull : false}
});


userDB.Sequelize = Sequelize;
userDB.sequelize =sequelize;
userDB.user = User;

module.exports = userDB;