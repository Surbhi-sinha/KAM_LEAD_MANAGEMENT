const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./app/config/db')


//app
const app = express();
console.log(process.env.PORT);
var corsOptions = {
      origin : "http://localhost:3000"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


//basic Route
app.get('/' , (req,res)=>{
      res.json({message : "Welcome to KAM manager tool"})
})

require("./app/routes/LeadRoutes")(app);
require("./app/routes/AuthRoutes")(app);
require("./app/routes/UserRoutes")(app);
require("./app/routes/dummyRoute")(app);
require("./app/routes/InteractionRoutes")(app);


(async()=>{
      try{
            sequelize.sync({force:true}).then(()=>{
                 console.log("SuccessFully connected to db")
           }).catch((err)=>{
                 console.log("error occured : " ,err);
           })
            
      }catch(err){
            console.log('error connecting DB : ' , err)
      }
})()




var PORT = process.env.PORT 
app.listen(PORT , ()=>{
      console.log(`Server running on port : http://localhost:${PORT}`)
})