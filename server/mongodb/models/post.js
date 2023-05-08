import mongoose from "mongoose";
const { Schema } = mongoose;

// Defining schema
const postSchema = new Schema({
    name:{type:String,required:true},
    prompt:{type:String,required:true},
    photo:{type:String,required:true},
})

// Creating a model
// mongoose.model(modelName, schema):

const PostSchema = mongoose.model('Post', postSchema);

export default PostSchema;