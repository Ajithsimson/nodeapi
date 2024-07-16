import { model, Schema } from "mongoose";
//write schema
const schema = new Schema({
title: String,
desc: String
});
 
//create your model
const Movie = model("Movie", schema);

export default Movie;