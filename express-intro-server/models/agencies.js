const mongoose = require("mongoose");

const {Schema} = mongoose;

const agencySchema = new Schema({
   name: String,
   location: String






});







module.exports = mongoose.model("agencies", agencySchema);