const express = require ("express");
const postRouter = express.Router();
const PostModel = require("../model/postModel");//constructor 


postRouter.route("/")
    .get((req, res) =>{
        PostModel.find(req.query, (err, foundPosts) =>{
            if(err)return res.status(200).res.send(err)
            res.status(200).send(foundPosts);
        })
    })
    .post((req, res) =>{
        const newPost = new PostModel(req.body);
        newPost.save((err, savedPost) =>{
            if(err) return res.send(err);
            res.status(200).send(savedPost);
        })
    })

    postRouter.route("/:id")
    .get((req, res) => { //====>use "findOne()" to get request for one id on mongos / to get particular cat
        PostModel.findOne({ _id: req.params.id })
        .exec((err, foundPost) => {
            if (err) res.status(200).send(err)
            else res.status(200).send(foundPost);
        })
    })

    //DELETE one request
    .delete((req, res) => {          //====>use "findByIdAndRemove()" to delete for one request on mongos
        PostModel.findOneAndRemove({ _id: req.params.id })
        .exec((err, deletedPost) => {      // we can use CatModel.findById, too instead of findByOneAndRemove
            if (err) {
                res.status(200).send(err)
            } else if (deletedPost) {
                res.status(204).send()
            } else {
                res.status(404).send("404 --- Post Not Found");
            }
        })                                

    })

    //PUT one
    .put((req, res) => {   //================================>use "findOneAndUpdate()" to put one on mongos
        PostModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        .exec( (err, updatedPost) => {
            if (err) {
                res.status(200).send(err)
            } else if (updatedPost) {
                res.status(200).send(updatedPost)
            } else {
                res.status(404).send("404 --- Post Not Found");
            }
        }
        )
    })
    
module.exports = postRouter