const express = require ("express");
const bookCollectionRouter = express.Router();
const BookCollectionModel = require("../model/booksCollectionsModel");//constructor

bookCollectionRouter.route("/")
    .get((req, res)=>{
        BookCollectionModel.find(req.query, (err, foundBooks)=>{
            if(err)return res.status(400).res.send(err)
            res.status(200).send(foundBooks);
        })
    })

    .post((req, res)=>{
        const newBookCollection = new BookCollectionModel(req.body);
        newBookCollection.save((err, savedBookCollection) =>{
            if(err)return res.send(err);
            res.status(200).send(savedBookCollection);
        })
    })

    bookCollectionRouter.route("/:id")
    .get((req, res) => {
        BookCollectionModel.findOne({_id:req.params.id})
        .exec((err, foundBookCollection) =>{
            if(err)res.status(400).send(err)
            else res.status(200).send(foundBookCollection);
        })
    })

    .delete((req, res) =>{
        BookCollectionModel.findOneAndRemove({_id: req.params.id})
        .exec((err, deletedBookCollection) =>{
            if(err){
                res.status(400).send(err)
            }else if(deletedBookCollection){
                res.status(204).send()
            }else{
                res.status(404).send("404 --- Book Collection Not Found")
            }
        })
    })

    .put((req, res)=>{
        BookCollectionModel.findOneAndUpdate({_id: req.params.id},
        req.body,{
            new: true
        })
        .exec((err, updatedBookCollection) =>{
            if(err){
                res.status(400).send(err)
            }else if(updatedBookCollection){
                res.status(200).send(updatedBookCollection)
            }else{
                res.status(404).send("404 --- Book Collection Not Found")
            }
            
        })
    })

    module.exports = bookCollectionRouter;

