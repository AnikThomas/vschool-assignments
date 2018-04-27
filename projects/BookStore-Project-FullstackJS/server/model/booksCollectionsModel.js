const mongoose = require ("mongoose");
const {Schema} = mongoose;

const BookCollectionsSchema = new Schema({
    Title:{
        required: true,
        type: String
    },
    Author_id:{
        type:mongoose.Schema.Types.Objectid,
        ref:"author"//reference
    },
    Publisher:{
        required: true,
        type: String
    },
    Image:{
        required: true,
        type: String
    },
    Price:{
        required: true,
        type: Number
    },
    Genre_ID:{
        type: mongoose.Schema.Types.Objectid,
        ref:"genre"//reference
    },
    ISBN_ID:{
        type:Number
        
    }
})




const BookCollectionsModel = mongoose.model("books_collections", BookCollectionsSchema); // "books_collections" is from DB reference collections
module.exports = BookCollectionsModel;
