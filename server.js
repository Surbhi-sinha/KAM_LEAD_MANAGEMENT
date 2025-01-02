const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Lead Model
const Lead = require("./app/models/Lead");

//app
const app = express();
console.log(process.env.PORT);
var corsOptions = {
      origin : "http://localhost:"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// The LeadRoutes file defines the REST API endpoints (like POST, GET, DELETE, etc.) for handling Lead data.
// By passing app, the routes are registered with the Express app, so they become available for handling HTTP requests.
require("./app/routes/LeadRoutes")(app);

// This tells Sequelize to synchronize the database schema with your model definitions.
// { force: true }:
// If true, it drops the existing Leads table (if it exists) and recreates it based on the model definition.
// This is useful during development when you want to reset the database schema frequently.
Lead.sequelize.sync({ force: true }).then(()=>{
      console.log("successfull connection to db established")
}).catch((err)=>{
      console.log("error occured : " , err);
})


//basic Route
app.get('/' , (req,res)=>{
      res.json({message : "Welcome to KAM manager tool"})
})



var PORT = process.env.PORT 
app.listen(PORT , ()=>{
      console.log(`Server running on port : http://localhost:${PORT}`)
})