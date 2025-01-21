const Interaction = require('../models/Interaction');

// Inside Interactions.js controller
exports.Test = (req, res) => {
      console.log(req.body); // Logs incoming data
      res.status(200).json({ message: 'Test endpoint working!', data: req.body });
};
exports.create = (req, res) => {
      if (!req.body.LeadId || !req.body.comment) {
            return res.status(400).send({ message: 'Lead ID and Comment are required' });
      }
      const interaction = {
            comment: req.body.comment,
            LeadId: req.body.LeadId
      };

      Interaction.create(interaction).then((data) => {
            res.status(200).send({
                  message: "Interaction saved!"
            });
            // res
      }).catch(err => {
            res.status(500).send({
                  message: "Error occured " + err
            })
      })

};

// Retrieve all interaction for a specific lead
exports.findAllBylead_Id = (req, res) => {
      const LeadId = req.params.leadId;
      console.log(req,res);
      Interaction.findAll({
            where: { LeadId: LeadId },
            order: [['created_at', 'DESC']]  // Sorting by most recent first
      })
            .then((data) => {
                  if (data.length === 0) {
                        res.status(404).send({ message: `No interactions found for lead with id ${LeadId}` });
                  } else {
                        res.send(data);
                        res.status(200);
                  }
            })
            .catch(err => {
                  res.status(500).send({
                        message: "Error fetching interactions for lead with id " + LeadId + ": " + err
                  });
            });
};

// update an Interaction by Id
exports.update = (req, res) => {
      const id = req.params.id;

      Interaction.update(req.body, {
            where: { id: id }
      }).then(num => {
            if (num == 1) {
                  res.send({
                        message: "Interaction updates successfully!"
                  })
            } else {
                  res.send({
                        message: `Cannot update interaction with id ${id}`
                  })
            }
      }).catch(err => {
            res.status(500).send({
                  message: "Error updating interaction with id " + id
            })
      })
}
//delete an Interaction by id
exports.delete = (req, res) => {
      const id = req.params.id;

      Interaction.destroy({
            where: { id: id }
      }).then(num => {
            if (num == 1) {
                  res.send({
                        message: "Interaction deleted Successfully!"
                  })
            } else {
                  res.send({
                        message: `Cannot delete interaction with id ${id}`
                  })
            }
      }).catch(err => {
            res.status(500).send({
                  message: "Could not delete interaction with id " + id
            })
      })
}
