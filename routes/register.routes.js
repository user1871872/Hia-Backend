const router = require('express').Router();
const registerModel = require('../models/register.model');

router.route('/').get((req, res) => {
    registerModel.findById()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('error' + err));
});
// router.route("/account/:id").get((req, res) => {
//     registerModel.findById({_id: req.params.id}, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });
// });
router.route('/signUp').post((req, res) => {
    registerModel.create(req.body)
    .then(registered => res.json(registered))
    .catch(err => res.json(err))
})

module.exports = router;