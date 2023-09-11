const router = require('express').Router()
const classRecord = require('../models/classRecords.model')

router.route('/record').get((req,res) =>{
classRecord.find()
.then((classRecord) => res.json(classRecord))
.catch((error) => res.status(404).json('error') + error)
})

router.route("/addRecord").post (async (req, res) => {
 
    const studentlist = req.body;
    const newstudentList = new classRecord(studentlist);
    await newstudentList.save();
    res.json(studentlist);
});
module.exports = router;