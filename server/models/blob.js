var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//odm
var blobSchema = new Schema({
  name: String,
  lastName: String
});


module.exports = mongoose.model('blobs', blobSchema);
