// verifying token;

const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const userDB = require('../models/User');
const { where } = require('sequelize');
const User = userDB.user;

const verifyToken = (req, res, next) => {
      let token = req.headers["x-access-token"];
      if (!token) {
            return res.status(403).send({
                  message: "No token provided."
            })
      }
      jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                  return res.status(401).send({
                        message: "Unauthorised Access!"
                  })
            }
            req.userID = decoded.id;
            next();
      })
}

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
      try {
            const userByUserName = await User.findOne({
                  where: { username: req.body.username }
            })
           

            if (userByUserName) {
                  res.status(500).send({
                        message: "Failed! user with username already exits"
                  })
                  return;
            }
            const userByUserEmail = await User.findOne({
                  where: { username: req.body.email }
            })
            

            if (userByUserEmail) {
                  res.status(500).send({
                        message: "Failed! user with email already exits"
                  })
                  return;
            }
            next();
      } catch (err) {
            return res.status(500).send({
                  message: err
            })
      }
}

const authJwt = {
      verifyToken,
      checkDuplicateUsernameOrEmail
}
console.log(authJwt);
module.exports = authJwt;