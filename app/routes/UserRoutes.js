// not working on it currently

const {authJwt}  = require('../middlewares/authMiddleware');
const User = require("../controllers/authContoller");
const express = require('express');
// const {registerLead} = require('../controllers/leadController');
const router = express.Router();

module.exports = function(app){
      app.use(function(req , res , next){
            res.header(
                  "Access-Control-Allow-Headers",
                  "x-access-token ,Origin , Content-Type , Accept" 
            )
            next();
      })
      router.post('/api/test/all', User.signup)
      // app.get("/api/test/all", function(req,res){
      //       res.status(200).send("Public Content");
      // })
}