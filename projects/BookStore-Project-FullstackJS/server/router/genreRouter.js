const express = require ("express");
const genreRouter = express.Router();
const GenreModel = require("../model/genreModel");//constructor


genreRouter.route("/")
    .get((req, res) =>{
        GenreModel.find(req.query)
        .exec((err, foundGenres) =>{
            if(err)return res.status(400).res.send(err)
            res.status(200).send(foundGenres);
        })
    })

    .post((req, res) =>{
        const newGenre = new GenreModel(req.body);
        newGenre.save((err, savedGenre) =>{
            if(err)return res.send(err);
            res.status(200).send(savedGenre);
        })
    })

    genreRouter.route("/:id")
    .get((req, res) => {
        GenreModel.findOne({ _id: req.params.id })
            .exec((err, foundGenre) => {
                if (err) {
                    res.status(400).send(err)
                } else if (foundGenre) {
                    res.status(200).send(foundGenre)
                } else {
                    res.status(404).send("Genre Not found")
                }
            })
    })

    .delete((req, res) =>{
        GenreModel.findOneAndRemove({_id: req.params.id})
        .exec((err, deletedGenre) =>{
            if(err){
                res.status(400).send(err)
            }else if(deletedGenre){
                res.status(204).send()
            }else{
                res.status(404).send("404 --- Genre Not Found")
            }
        })
    })

    .put((req, res) =>{
        GenreModel.findOneAndUpdate({_id: req.params},
        req.body,{
            new:true
        })
        .exec((err, updatedGenre) =>{
            if(err){
                res.status(400).send(err)
            }else if(updatedGenre){
                res.status(200).send(updateGenre)
            }else{
                res.status(404).send("404 -- Genre Not Found")
            }
        })
    })

    module.exports = genreRouter;