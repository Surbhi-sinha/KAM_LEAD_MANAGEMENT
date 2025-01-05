const {DataTypes , Sequelize} = require('sequelize');
const dbConfig = require('../config/db.config');


const sequelize = new Sequelize(
      dbConfig.DB , dbConfig.USER , dbConfig.PASSWORD,{
            host : dbConfig.HOST,
            dialect : dbConfig.dialect
      }
)

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