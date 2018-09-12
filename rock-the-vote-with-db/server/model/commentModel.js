const mongoose = require ("mongoose");
const {Schema} = mongoose;

const CommentSchema = new Schema({
    comment: {
        required: true,
        type: String
    },
    post_ID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "post"//reference
    },
   
})



const CommentModel = mongoose.model("comment", CommentSchema);
module.exports = CommentModel;