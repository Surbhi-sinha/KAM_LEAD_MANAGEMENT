const express = require('express');

const router = express.Router();

module.exports = app => {
      console.log("hi")
      router.post('/', (req, res) => {
            res.status(200).send({
                  message: "test succesful"
            })
      });
      app.use('/api/test', router);
}