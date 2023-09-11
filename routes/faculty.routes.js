const router = require('express').Router();
let faculty = require('../models/faculty.model');

router.route('/').get((req, res) => {
    faculty.find().sort({
        principal: -1,
        teacher: 1,
        staff: 1
    })
        .then(faculty => res.json(faculty))
        .catch(err => res.status(400).json('error' + err));
});

router.route('/add').post((req, res) => {
    const image = req.body.image;
    const role = req.body.role;
    const name = req.body.name;
    const major = req.body.major;
    const description = req.body.description;

    const newFaculty = new faculty({
        image,
        role,
        name,
        major,
        description
    })

    newFaculty.save()
        .then(() => res.json('faculty added!'))
        .catch(err => res.status(400).json('Error:' + err))
})

router.route('/delete').post( async (req,res) =>{
    const{id}=req.body;
    try {
       await faculty.deleteOne(
            { _id: id });
        res.send({status: "OK", data: "deleted"});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;