var jwt = require('jwt-simple');

module.exports = function(app) {

  var util = {
    getFilter: getFilter
  };

  return util;

  function getFilter (req) {
    var query = req.query;
    var _token = app.services.auth.decode(req);
    var filter = {};

    for (var key in query) {
      if (query.hasOwnProperty(key)) {
        var element = query[key];
        filter[key] = query[key];
      }
    }

    filter.grupo = _token.usuario.grupo;
    return filter;
  }
};
