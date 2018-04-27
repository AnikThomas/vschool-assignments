const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const authorRouter = require ("./router/authorRouter.js")



//setting the App
const app = express();
const PORT = 8080;


//middleware
app.use(bodyParser.json());


//routes
app.use('/authors',authorRouter);
app.use('/BooksCollection', booksCollectionRouter);
app.use('/Genre', genreRouter);




//data connection and start the server
mongoose.connect ('mongodb://localhost:27017/BookStore');//from DB
app.listen(PORT,() => console.log(`bookStore server running on ${PORT}`))
