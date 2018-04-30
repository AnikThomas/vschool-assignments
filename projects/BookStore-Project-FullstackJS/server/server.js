const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const authorRouter = require ("./router/authorRouter.js");
const booksCollectionRouter = require ("./router/booksCollectionsRouter.js");
const genreRouter = require ("./router/genreRouter.js");
const morgan = require ("morgan");




//setting the App
const app = express();
const PORT = 8080;





//middleware
app.use(bodyParser.json());
app.use(morgan("dev"));




//routes
app.use('/authors',authorRouter);
app.use('/BooksCollection', booksCollectionRouter);
app.use('/Genre', genreRouter);











//data connection and start the server
mongoose.connect ('mongodb://localhost/BookStore', err =>{
    if (!err)
    console.log('Conected to BookStore!')
});//from DB
app.listen(PORT,() => console.log(`bookStore server running on ${PORT}`))
