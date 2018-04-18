const express = require("express");
const catRouter = express.Router();
const uuid = require ("uuid");
let cats = require("./catsData");

//actual routes go here
catRouter.route("/")
    .get((req, res) => {
        const {query} = req;  //USING EXPRESS !!
        console.log(query);
        //check each cat in the array
        //filter it by matching properties/values
        const queriedCats = cats.filter(cat =>{
            for(let key in query){
                if(!cat.hasOwnProperty(key) || String(cat[key]).toLowerCase() !== query[key].toLowerCase()){
                    return false;
                }
            }
            return true;
        })
        console.log(req.query)
        res.status(200).send(queriedCats);
    })

    .post((req, res) => {
        console.log(req.body)
        const newcat = req.body;
        newcat._id = uuid();
        cats.push(newcat);
        res.status(201).send(newcat);
    })

    //Post request
        //convert request body from JSON
        //provide and id to the data (cat being added)

    //give data in request body an id
       // console.log(req.body) // body come from middleware
        //save the data in the request body to the 'database'
    //send back the data that was added


    //Get one request
    //any requests to the /cats/id endpoint we will send back the cat matching that id
    catRouter.route("/")
    .get((req, res) => {
        //get param id:
        const {id} = req.params;
        const foundcat = cats.filter(cat =>cat._id === id)[0];
        res.status(200).send (foundcat);
        //console.log(req.params.id)
    })

    //DELETE one request
    .delete((req, res) => {
        const {id} = req.params;
        //find and remove cat matching id:
       cats = cats.filter(cat => cat._id !==id);
        //send back the cat
        res.status(204).send();

    })

    //PUT one
    .put((req, res) =>{
        //find the param id
        const {id} = req.params;
        let editedcat = req.body;
        //map through cats and replace the cat w/ matching id with req.body
        cats = cats.map(cat => cat._id === id ? editedcat = {...cat, ...editedcat} : cat);
        res.status(200).send(editedcat)  //
    })



module.exports = catRouter;