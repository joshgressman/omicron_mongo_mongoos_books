//this is a sub document

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
  content: {type: String, required: true},
  postedBy: String,
});

var Comment = mongoose.model('Comment', commentSchema);

 module.exports = Comment;
