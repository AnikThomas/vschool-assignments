const express = require ('express');
const bodyParser = require ("body-parser"); //bodyParser is middleware
const mongoose = require("mongoose");
const catRouter = require("./routes/cats")

const agencyRouter = require("./routes/agencies.js")
const app = express();
const port = 8080;


//middleware
app.use(bodyParser.json());


//routes
app.use("/cats", catRouter);
app.use("/agencies", agencyRouter);

//outsorce the "cat" routes to the cats.js
//import them into this file, and then when a request is made to the /cats endpoint, route the request/response obnjects to them





mongoose.connect("mongodb://localhost:27017/cats", (err)=> {
    if(err)console.error(err);

    
})
app.listen(port, () => console.log("server running on port" + port));


