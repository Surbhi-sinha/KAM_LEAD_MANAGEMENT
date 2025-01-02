const {DataTypes,Sequelize} = require('sequelize');
const dbConfig = require('../config/db.config');

// console.log(sequelize)
const sequelize = new Sequelize(dbConfig.DB , dbConfig.USER , dbConfig.PASSWORD,{
      host : dbConfig.HOST,
      dialect : dbConfig.dialect
})

// console.log(sequelize ,dbConfig.DB , dbConfig.USER , dbConfig.PASSWORD )
const leadDB = {};
const Lead = sequelize.define('Lead' , {
      // lead_ID : {type : DataTypes.INTEGER , primaryKey : true , autoIncrement : true},
      restraunt_name :{type: DataTypes.STRING , allowNull : false},
      restraunt_address :{type: DataTypes.STRING},
      status : {type: DataTypes.ENUM('new' , 'contacted' , 'discussion', 'closed'), defaultValue : 'new'},
      POC1_name : {type : DataTypes.STRING},
      POC1_phone_number : {type:DataTypes.STRING},
      POC1_email : {type : DataTypes.STRING },
      POC1_role : {type : DataTypes.ENUM('manager' , 'owner')},
      POC2_name : {type : DataTypes.STRING},
      POC2_phone_number : {type:DataTypes.STRING},
      POC2_email : {type : DataTypes.STRING },
      POC2_role : {type : DataTypes.ENUM('manager' , 'owner')},
      call_frequency : {type : DataTypes.INTEGER , defaultValue : 2},
},{
     timestamps : true,
     createdAt : 'created_at',
     updatedAt : 'updated_at' 
});


leadDB.Sequelize = Sequelize;
leadDB.sequelize = sequelize;
leadDB.lead = Lead;


module.exports = leadDB;