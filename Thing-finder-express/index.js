const express = require ('express');
const uuid = require ("uuid");
const bodyParser = require ("body-parser"); //bodyParser is middleware

const app = express();

let things = require("./things.js");

const PORT = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.route("/fruit")
    .get((req, res) => {
        const {query} = req;  //USING EXPRESS !!
        console.log(query);
        //check each thing in the array
        //filter it by matching properties/values
        const queriedthings = things.filter(thing =>{
            for(let key in query){
                if(!thing.hasOwnProperty(key) || String(thing[key]).toLowerCase() !== query[key].toLowerCase()){
                    return false;
                }
            }
            return true;
        })
        console.log(req.query)
        res.status(200).send(queriedthings);
    })

    .post((req, res) => {
        const newThing = req.body;
        newThing._id = uuid();
        things.push(newThing);
        res.status(201).send(newThing);
    })

    //Post request
        //convert request body from JSON
        //provide and id to the data (thing being added)

    //give data in request body an id
       // console.log(req.body) // body come from middleware
        //save the data in the request body to the 'database'
    //send back the data that was added


    //Get one request
    //any requests to the /things/id endpoint we will send back the thing matching that id
    app.route("/fruit/:id")
    .get((req, res) => {
        //get param id:
        const {id} = req.params;
        const foundThing = things.filter(thing =>thing._id === id)[0];
        res.status(200).send (foundThing);
        //console.log(req.params.id)
    })

    //DELETE one request
    .delete((req, res) => {
        const {id} = req.params;
        //find and remove thing matching id:
        things = things.filter(thing => thing._id !==id);
        //send back the thing
        res.status(204).send();

    })

    //PUT one
    .put((req, res) =>{
        //find the param id
        const {id} = req.params;
        let editedThing = req.body;
        //map through things and replace the thing w/ matching id with req.body
        things = things.map(thing => thing._id === id ? editedThing = {...thing, ...editedThing} : thing);
        res.status(200).send(editedThing)  //
    })



app.listen(PORT, ()=> console.log("Server running on port" + PORT) );

