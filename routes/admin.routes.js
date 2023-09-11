const router = require('express').Router();
const loginModel = require('../models/register.model')

router.route('/admin').post((req, res) => {
    const {username, password} = req.body;
    loginModel.findOne({username: username})
    .then(account => {
        if(account){
            if(account.password === password){
                res.json('Success')
            }else{
                res.json('password is incorrect')
            }
        }else{
            res.json('account not exist')
        }
    })
})

module.exports = router;