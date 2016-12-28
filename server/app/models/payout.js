var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function() {

  var schema = mongoose.Schema({
    playerName: {
      type: String,
      required: true
    },
    oreName: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    }
  });

  schema.plugin(findOrCreate);
  return mongoose.model('Payout', schema);

};
