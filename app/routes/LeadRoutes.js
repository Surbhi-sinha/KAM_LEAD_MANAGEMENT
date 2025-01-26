const express = require('express');

const router = express.Router();

module.exports = app =>{
      const Leads = require("../controllers/leadController");

      router.post('/' , Leads.create );
      router.get('/', Leads.findAll);
      router.delete('/:id' , Leads.delete);
      router.get('/:id' , Leads.findOne);
      router.put('/:id' , Leads.update);
      app.use('/api/Leads' , router)
}