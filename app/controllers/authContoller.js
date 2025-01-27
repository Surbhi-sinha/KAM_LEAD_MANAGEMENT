const config = require("../config/auth.config");
const userDB = require("../models/User");

const User = userDB.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
      try {
            // Create a new user
            const user = await User.create({
                  username: req.body.username,
                  email: req.body.email,
                  password: bcrypt.hashSync(req.body.password), // Make sure to hash passwords in production!
            });

            // Send a success response
            return res.status(201).send({
                  message: "User registered successfully!",
                  user,
            });
      } catch (err) {
            res.status(500).send({
                  message: "error occured while creating the user " + err
            })
      }
}


exports.signin = async (req, res) => {
      try {
            const user = await User.findOne({
                  where: { username: req.body.username }
            })
            if (!user) {
                  return res.status(404).send({
                        message: "User not found",
                  });
            }
            var passValidate = bcrypt.compareSync(req.body.password, user.password);

            if (!passValidate) {
                  return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password 1"
                  })
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                  algorithm: 'HS256',
                  allowInsecureKeySizes: true,
                  expiresIn: 86400 //24hrs
            })

            return res.status(200).send({
                  id: user._id,
                  username: user.username,
                  email: user.email,
                  accessToken: token
            })

      } catch (err) {
            return res.status(500).send({
                  message: "Error while sigining up!"
            })
      }
}