const express = require('express');
const upVote = express.Router()
const PostModel = require("../model/postModel")

upVote.route("/:id")
.get((req, res) => {
    const update = {$inc: {upvote: 1}};
    PostModel.findOneAndUpdate({ _id: req.params.id }, update, { new: true })
    .exec(((err, updatePost) => {
            if (err) {
                res.status(200).send(err)
            } else if (updatePost) {
                res.status(200).send(updatePost)
            } else {
                res.status(404).send("404 --- Post Not found")
            }
        }))
})



module.exports = upVote