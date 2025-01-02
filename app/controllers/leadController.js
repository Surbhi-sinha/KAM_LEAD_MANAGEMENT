const leadDB = require('../models/Lead');
const Lead = leadDB.lead;

//creates a new Lead
exports.create = (req ,res)=>{
      //validateRequest
      if(!req.body.restraunt_name){
            res.status(400).send({message : "Content can not be empty"});
            return;
      }
      const lead = {
            restraunt_name : req.body.restraunt_name,
            restraunt_address : req.body.restraunt_address,
            status : req.body.status ? req.body.status: "new",
            POC1_name :  req.body.POC1_name,
            POC1_phone_number : req.body.POC1_phone_number,
            POC1_email : req.body.POC1_email,
            POC1_role : req.body.POC1_role,
            POC2_name : req.body.POC2_name,
            POC2_phone_number : req.body.POC2_phone_number,
            POC2_email :  req.body.POC2_email,
            POC2_role :  req.body.POC2_role,
            call_frequency : req.body.call_frequency ? req.body.call_frequency : 2,
      }

      //save tutorial in db
      Lead.create(lead).then((data)=>{
            res.send(data);
            res.status(200);
      }).catch(err=>{
            res.status(500).send({
                  message : "error occured while creating the lead " + err
            })
      })

}


// Retrieve all the Leads
exports.findAll = (req,res)=>{

}

//Find a single lead with an ID
exports.findOne =(req,res) =>{

}

//Update a lead by Id in the request
exports.uodate =(req,res) =>{

}

// Delete a lead with the specified id in the request
exports.delete = (req,res)=>{
      
}

//Delete all the leads from the DB
exports.deleteAll=(req,res)=>{

}

