const express = require ('express');
const uuid = require ("uuid");
const bodyParser = require ("body-parser"); //bodyParser is middleware

const app = express();

let todo = require("./todo.js");// this what need to change in the future between project

const PORT = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.route("/todo")//this what need to change in the future between project
    .get((req, res) => {
        res.status(200).send(todo);
    })

    .post((req, res) => {
        const newData = req.body;
        newData._id = uuid();
        todo.push(newData);
        res.status(201).send(newData);
    })

    //Post request
        //convert request body from JSON
        //provide and id to the data (data being added)

    //give data in request body an id
       // console.log(req.body) // body come from middleware
        //save the data in the request body to the 'database'
    //send back the data that was added


    //Get one request
    //any requests to the /todo/id endpoint we will send back the data matching that id
    app.route("/todo/:id")//this what need to change in the future between project
    .get((req, res) => {
        //get param id:
        const {id} = req.params;
        const foundData = todo.filter(data =>data._id === id)[0];
        res.status(200).send (foundData);
        //console.log(req.params.id)
    })

    //DELETE one request
    .delete((req, res) => {
        const {id} = req.params;
        //find and remove data matching id:
        todo = todo.filter(data => data._id !==id);
        //send back the data
        res.status(204).send();

    })

    //PUT one
    .put((req, res) =>{
        //find the param id
        const {id} = req.params;
        let editedData = req.body;
        //map through todo and replace the data w/ matching id with req.body
        todo = todo.map(data => data._id === id ? editedData = {...data, ...editedData} : data);
        res.status(200).send(editedData)  //
    })



app.listen(PORT, ()=> console.log("Server running on port" + PORT) );

