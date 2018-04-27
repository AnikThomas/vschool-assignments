//require to define:
const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const postRouter = require ("./router/postRouter.js");
const commentsRouter = require ("./router/commentsRouter.js");
const downVote = require("./router/downVote");
const upVote= require("./router/upVote");


//setting the App
const app = express();
const PORT = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.use('/post',postRouter );
app.use('/comments', commentsRouter)
app.use('/downvote', downVote);
app.use('/upvote',upVote );






//data connection and start the server
mongoose.connect ('mongodb://localhost:27017/votes');//connected to database
app.listen(PORT,()=> console.log(`vote server running on ${PORT}`))