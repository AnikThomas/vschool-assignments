const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Schema } = mongoose;
const morgan = require("morgan");


const bookFinder = new Schema({
    title: { required: true, type: String },
    synopsis: { type: String },
    publisher: { type: String },
    author: { type: String },
    isbn: { type: Number },
    image:{type: String},
    price:{type: Number}
})

const bookFinderModel = mongoose.model("book", bookFinder);


//setting the App
const app = express();
const PORT = 8080;





//middleware
app.use(bodyParser.json());
app.use(morgan("dev"));




//routes
app.route("/books")
    .get((req, res) => {
        bookFinderModel.find(req.query)
            .exec((err, foundBook) => {
                if (err) {
                    res.status(500).send(err)
                } else if (foundBook) {
                    res.status(200).send(foundBook)
                } else {
                    res.status(404).send("Book Not Found")
                }
            })

    })
    .post((req, res) => {
        const newBook = new bookFinderModel(req.body)
        newBook.save((err, addedBook) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(addedBook)
            }
        })
    })

app.route("/books/:id")
    .get((req, res) => {
        bookFinderModel.findOne({ _id: req.params.id })
            .exec((err, foundBook) => {
                if (err) {
                    res.status(200).send(err)
                } else if (foundBook) {
                    res.status(200).send(foundBook)
                } else {
                    res.status(404).send("404 ---Book Not Found")
                }
            })
    })

    .delete((req, res) => {
        bookFinderModel.findOneAndRemove({ _id: req.params.id })
            .exec(((err, deleteBook) => {
                if (err) {
                    res.status(200).send(err)
                } else if (deleteBook) {
                    res.status(204).send()
                } else {
                    res.status(404).send("404 --- Book Not Found")
                }
            }))
    })

    .put((req, res) => {
        bookFinderModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .exec(((err, updateBook) => {
                if (err) {
                    res.status(200).send(err)
                } else if (updateBook) {
                    res.status(200).send(updateBook)
                } else {
                    res.status(404).send("404 --- Book Not Found")
                }
            }))
    })









//data connection and start the server
mongoose.connect('mongodb://localhost/booksFinder', err => {
    if (!err)
        console.log('Conected to booksFinder!')
});

//from DB
app.listen(PORT, () => console.log(`booksFinder server running on ${PORT}`))
