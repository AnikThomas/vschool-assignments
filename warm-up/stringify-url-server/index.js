//Write a function that takes a query object and an HTTP endpoint and then returns a URL with a query string.

const express = require('express');
const uuid = require("uuid")
const bp = require("body-parser")

const app = express();
const PORT = 8080;
let database = [
    {
        color: "Pink",
        species: "Panther"
    },
    {
        color: "whiteSmokey",
        species: "Unicorn"

    }
]

//middleware
app.use(bp.json())

//routes
app.route("/data")
    .get((req, res) => {
        const { query } = req;
        console.log("query", query)
        const queriedData = database.filter(obj => {
            for (let key in query) {
                if (query[key] === "") {
                    continue;
                }
                if (!obj.hasOwnProperty(key) || String(obj[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false
                }
            }
            return true;
        })
        res.status(200).send(queriedData);
    }
    )
    .post((req, res) => {
        console.log(req.body);
        const newData = req.body
        newData._id = uuid()
        database.push(newData)
        res.status(201).send(newData)
    })

app.route("/data/:id")
    .get((req, res) => {
        console.log("id", req.params)
        const { id } = req.params
        const foundData = database.filter(data => data._id === id)[0]
        res.status(200).send(foundData);
    })
    .delete((req, res) => {
        console.log("delete", req.params)
        const { id } = req.params
        database = database.filter(data => data._id !== id)
        res.status(204).send();
    })
    .put((req, res) => {
        console.log("put", req.params);
        const { id } = req.params;
        let editedData = req.body;
        database = database.map(obj => obj._id === id ? editedData = { ...obj, ...editedData } : obj);
        res.status(200).send(editedData)
    })


app.listen(PORT, () => console.log(`stringifyUrl server running on ${PORT}`))

