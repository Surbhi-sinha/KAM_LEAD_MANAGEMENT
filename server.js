const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Lead Model
const Lead = require("./app/models/Lead");
const User = require('./app/models/User');

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

// The LeadRoutes file defines the REST API endpoints (like POST, GET, DELETE, etc.) for handling Lead data.
// By passing app, the routes are registered with the Express app, so they become available for handling HTTP requests.
require("./app/routes/LeadRoutes")(app);
require("./app/routes/AuthRoutes")(app);
require("./app/routes/UserRoutes")(app);

// This tells Sequelize to synchronize the database schema with your model definitions.
// { force: true }:
// If true, it drops the existing Leads table (if it exists) and recreates it based on the model definition.
// This is useful during development when you want to reset the database schema frequently.
Lead.sequelize.sync({ force: true }).then(()=>{
      console.log("successfull connection to db established")
}).catch((err)=>{
      console.log("error occured : " , err);
})

User.sequelize.sync({force : true}).then(()=>{
      console.log("successfull connection to db established")
}).catch((err)=>{
      console.log("error occured : " , err);
})



var PORT = process.env.PORT 
app.listen(PORT , ()=>{
      console.log(`Server running on port : http://localhost:${PORT}`)
})