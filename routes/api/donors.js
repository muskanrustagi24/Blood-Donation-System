const Donor = require('../../db').Donor
const route = require('express').Router()

route.get('/', (req,res) => {
   //We want to send an array of donors
   //From our database here

   Donor.findAll()
       .then((donors) => {
           res.status(200).send(donors)
       })
       .catch((err) => {
           res.status(500).send({
              error : "Could not retrieve donors"
           })
       })
})

route.post('/', (req,res) => {
    //Add a new donor

    Donor.create({
        name: req.body.name,
        age : parseInt(req.body.age),
        contact : parseInt(req.body.contact),
        city :req.body.city,
        blood_group : req.body.blood_group,
        any_health_issues : req.body.any_health_issues
        
    }).then((donor) => {
        res.status(201).send(donor)
    }).catch((err) => {
        res.status(501).send({
        error : "Could not add new donor"
        })
    })
})

exports = module.exports = route