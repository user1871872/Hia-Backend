const router = require('express').Router();
const articles = require('../models/article.model');

router.route('/').get((req, res) => {
    articles.find().sort({
        image:-1,
        description:-1
    })
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('error' + err));
});

router.route('/add').post((req, res) => {
    const image =   req.body.image;
    const description = req.body.description;
    const newPost = new articles({
        image,
        description
    })

    newPost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error:' + err))
})

router.route('/delete').post( async (req,res) =>{
    const{id}=req.body;
    try {
       await articles.deleteOne(
            { _id: id });
        res.send({status: "OK", data: "deleted"});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;