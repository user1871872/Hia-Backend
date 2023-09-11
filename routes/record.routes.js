const router = require('express').Router()
let record = require('../models/record.model')

router.route('/').get((req,res) =>{
        record.find()
        .then(record => res.json(record))
        .catch(err => res.status(400).json('error' + err))
});

router.route('/add').post((req,res) =>{
        const image = req.body.image;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const age = req.body.age;
        const birthdate = req.body.birthdate;
        const address = req.body.address;
        const mother = req.body.mother;
        const occupation = req.body.occupation;
        const father = req.body.father;
        const guardian = req.body.guardian;
        const emergencyNumber = req.body.emergencyNumber;

        const newRecord = new record ({
            image,
            firstname,
            lastname,
            age,
            birthdate,
            address,
            mother,
            father,
            occupation,
            guardian,
            emergencyNumber
        })

        newRecord.save()
        .then(() => res.json('sucessfully added to the record'))
        .catch((error) => res.status(400).json('error') + error)

})

router.route('/delete').post( async (req,res) =>{
        const{id}=req.body;
        try {
           await record.deleteOne(
                { _id: id });
            res.send({status: "OK", data: "deleted"});
        } catch (error) {
            console.log(error);
        }
    })
module.exports = router;