const express = require("express");
const catRouter = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cats');

const uuid = require("uuid");

const CatModel = require("../models/cats.js");

//actual routes go here
catRouter.route("/")
    .get((req, res) => {  //==============================================>  we use "find" to get request on mongos
        CatModel.find(req.query, (err, foundCats) => {
            if (err) res.status(200).send(err);
            else if (foundCats) res.status(200).send(foundCats);
        })

    })

    .post((req, res) => {        //=======================================>we use "model name and ...model.save on mongos" to post
        const newCat = new CatModel(req.body);
        newCat.save((err, addedCat) => {
            if (err) res.status(200).send(err)
            else res.status(201).send(addedCat);
        })
    })

//Get one request
//any requests to the /cats/id endpoint we will send back the cat matching that id
catRouter.route("/:id")
    .get((req, res) => {                    //================================>use "findOne()" to get request for one id on mongos / to get particular cat
        CatModel.findOne({ _id: req.params.id }, (err, foundCat) => {
            if (err) res.status(200).send(err)
            else res.status(200).send(foundCat);
        })
    })

    //DELETE one request
    .delete((req, res) => {          //================================>use "findByIdAndRemove()" to delete for one request on mongos
        CatModel.findOneAndRemove({ _id: req.params.id }, (err, deletedCat) => {      // we can use CatModel.findById, too instead of findByOneAndRemove
            if (err) {
                res.status(200).send(err)
            } else if (deletedCat) {
                res.status(204).send()
            } else {
                res.status(404).send("404 --- Cat Not Found");
            }
        })                                

    })

    //PUT one
    .put((req, res) => {   //================================>use "findOneAndUpdate()" to put one on mongos
        CatModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        }, (err, updatedCat) => {
            if (err) {
                res.status(200).send(err)
            } else if (updatedCat) {
                res.status(200).send(updatedCat)
            } else {
                res.status(404).send("404 --- Cat Not Found");
            }
        }
        )
    })



module.exports = catRouter;