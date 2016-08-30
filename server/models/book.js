// Book model for mongoose
//dependecies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment').schema;
//1. create Schema
var bookSchema = new Schema({
  title: { type: String, required: true},
  author: String,
  publishDate: Date,
  publishBy: String,
  comments: [Comment]
});

//3. create the model
var books = mongoose.model('book', bookSchema);

//Step 4 export the model to use in other part of app

module.exports = books;
