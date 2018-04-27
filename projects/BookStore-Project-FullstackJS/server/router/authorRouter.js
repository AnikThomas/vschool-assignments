const express = require ("express");
const authorRouter = express.Router();
const AuthorModel = require("../model/authorModel");//constructor


authorRouter.route("/")
    .get((req, res)=> {
        AuthorModel.find(req.query, (err, foundAuthors)=>{
            if(err)return res.status(400).res.send(err)
            res.status(200).send(foundAuthors);
        })
    })
    .post((req, res) =>{
        const newAuthor = new AuthorModel(req.body);
        newAuthor.save((err, savedAuthor) =>{
            if(err)return res.send(err);
            res.status(200).send(savedAuthor);
        })
    })

    authorRouter.route("/:id")
    .get((req, res) =>{//find one req to get one id on mongos
        AuthorModel.findOne({_id:req.params.id})
        .exec((err, foundAuthor) =>{
            if(err)res.status(400).send(err)
            else res.status(200).send(foundAuthor);
        })
    })

    .delete((req, res) =>{
        AuthorModel.findOneAndRemove({_id: req.params.id})
        .exec((err, deletedAuthor)=>{
            if(err){
                res.status(400).send(err)
            }else if(deletedAuthor){
                res.status(204).send()
            }else{
                res.status(404).send("404 --- Author Not Found")
            }
        })
    })

    .put((req, res)=>{
        AuthorModel.findOneAndUpdate({_id: req.params.id}, req.body,{
            new: true
        })
        .exec((err, updatedAuthor)=>{
            if(err){
                res.status(400).send(err)
            }else if(updatedAuthor){
                res.status(200).send(updatedAuthor)
            }else{
                res.status(404).send("404 --- Author Not Found")
            }

        })
    })







    module.exports = authorRouter;