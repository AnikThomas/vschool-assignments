const mongoose = require ("mongoose");
const {Schema} = mongoose;

const BookCollectionsSchema = new Schema({
    title:{
        required: true,
        type: String
    },
    author_ID:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author"
    }],
    publisher:{
        required: true,
        type: String
    },
    image:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type: Number
    },
    genre_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre"
    },
    isbn:{
        type:Number
    }
});


const BookCollectionsModel = mongoose.model("books_collections", BookCollectionsSchema); // "books_collections" is from DB reference collections
module.exports = BookCollectionsModel;
