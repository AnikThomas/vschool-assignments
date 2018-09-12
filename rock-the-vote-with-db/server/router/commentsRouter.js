const express = require("express");
const commentRouter = express.Router();
const CommentModel = require("../model/commentModel");//constructor 


commentRouter.route("/")
    .get((req, res) => {
        CommentModel.find(req.query)
            .populate("post_id")
            .exec((err, foundComments) => {
                if (err) return res.status(200).res.send(err)
                res.status(200).send(foundComments);
            })
    })
    .post((req, res) => {
        console.log(req.body)
        const newComment = new CommentModel(req.body);
        newComment.save((err, addedComment) => {
            if (err){
                res.status(200).send(err)
            }else{
                //newComment(addedComment, {path:post_id},
               // populatedComment)
                res.status(201).send(addedComment)
            }
        })
    })

commentRouter.route("/:id")
    .get((req, res) => { //====>use "findOne()" to get request for one id on mongos / to get particular cat
        CommentModel.findOne({ _id: req.params.id })
            .exec((err, foundComment) => {
                if (err) res.status(200).send(err)
                else res.status(200).send(foundComment);
            })
    })

    //DELETE one request
    .delete((req, res) => {          //====>use "findByIdAndRemove()" to delete for one request on mongos
        CommentModel.findOneAndRemove({ _id: req.params.id })
            .exec((err, deletedComment) => {      // we can use CatModel.findById, too instead of findByOneAndRemove
                if (err) {
                    res.status(200).send(err)
                } else if (deletedComment) {
                    res.status(204).send()
                } else {
                    res.status(404).send("404 --- Comment Not Found");
                }
            })

    })

    //PUT one
    .put((req, res) => {   //================================>use "findOneAndUpdate()" to put one on mongos
        CommentModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true//
        })
            .populate("put_id")
            .exec((err, updatedComment) => {
                if (err) {
                    res.status(200).send(err)
                } else if (updatedComment) {
                    res.status(200).send(updatedComment)
                } else {
                    res.status(404).send("404 --- Comment Not Found");
                }
            }
            )
    })




module.exports = commentRouter