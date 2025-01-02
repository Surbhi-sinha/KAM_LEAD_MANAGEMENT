const express = require('express');
// const {registerLead} = require('../controllers/leadController');
const router = express.Router();

// router.post('/' , registerLead);

// module.exports = router;


module.exports = app =>{
      const Leads = require("../controllers/leadController");

      router.post('/' , Leads.create );

      app.use('/api/Leads' , router)
}