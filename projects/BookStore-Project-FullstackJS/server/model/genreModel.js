const mongoose = require ("mongoose");
const {Schema} = mongoose;

const GenreSchema = new Schema({
    name:{
        required: true,
        type: String
    }
})







const GenreModel = mongoose.model("genre", GenreSchema);//'genre'is from DB reference collections
module.exports = GenreModel;