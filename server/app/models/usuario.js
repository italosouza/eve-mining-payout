var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

module.exports = function() {

  var schema = mongoose.Schema({
    grupo : [{ type: Schema.Types.ObjectId, ref: 'Grupo' }],
    nome: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    inclusao: {
      type: Date,
      default: Date.now
    }
  });

  schema.plugin(findOrCreate);
  return mongoose.model('Usuario', schema);

};