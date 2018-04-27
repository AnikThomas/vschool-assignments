const mongoose = require ("mongoose");
const {Schema} = mongoose;

const AuthorSchema = new Schema({
    firstname:{
        required: true,
        type: String
    },
    lastname:{
        required: true,
        type: String
    }
})
















const AuthorModel = mongoose.model("author", AuthorSchema);
module.exports = AuthorModel;