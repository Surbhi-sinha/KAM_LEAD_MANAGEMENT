const express = require('express');

const router = express.Router();

module.exports = app => {
      const Interactions = require("../controllers/InteractionController");
      
      router.post('/', Interactions.create);
      // router.post('/', Interactions.Test);

      router.get("/lead/:leadId" , Interactions.findAllBylead_Id);
      router.delete('/:id', Interactions.delete);
      router.put('/:id' , Interactions.update);

      app.use('/api/Interactions' , router)
}