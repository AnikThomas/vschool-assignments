const mongoose = require("mongoose");

const {Schema} = mongoose;

//Schema is a constructor
//determines the template for all documents in a collection

const catSchema = new Schema({
    name: String,
    breed: {
        required:true, type:String

    },
    age: Number,
    adoptionStatus: {
        type: String,
        default: "not adopted"
    },
    agencyId:{
        type: mongoose.Schema.Types.ObjectId,// to get the object Id
        required:true, 
        ref: "agencies"
    }

})



const CatModel = mongoose.model("cats", catSchema);  // cats its from the name of the collection, catSchema the thing that we have define above
module.exports = CatModel;


