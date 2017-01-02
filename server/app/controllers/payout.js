var S = require('string');
// var request = require('request');

module.exports = function(app) {
  var controller = {};
  //definir o MODEL
  var _objeto = app.models.payout;

  controller.listar = function(req, res) {
    res.status(200).json({res: 'ok'});
  };

  controller.consultarPreco = function(){
    
  };

  controller.format = function(pLine) {
    var sLine = S(pLine).ensureRight('/');
    var playerName = S(sLine).between(' ', ' has looted');
    var oreName  = S(sLine).between('x ', '/');
    var amount = S(sLine).between('has looted ', ' x');

    return {
      playerName: playerName.toString(),
      oreName: oreName.toString(),
      amount: amount.toString(),
      value: 0
    };
  };

  controller.processar = function(req, res) {
    var history = req.body.history || '';
    var lines = S(history).lines();
    var content = [];
    var _preco = {};

    // request('http://api.eve-central.com/api/evemon', function(err, body){
    //   _preco = body;
    // }, this);

    lines.forEach(function(line, i) {
      var obj = controller.format(line);
      content.push(obj);
    }, this);

    res.status(200).json(content);
  };

  controller.buscar = function(req, res) {
    var _id = req.params.id;
    _objeto.findById(_id).exec()
      .then(function(pObjeto) {
          res.status(200).json(pObjeto);
        },
        function(erro) {
          console.error('Buscar -> Erro: \n', erro);
          res.status(500).json(erro);
        });
  };

  controller.buscarPorNome = function(psNome) {
    var _obj = {};
    _objeto.find({
        nome: psNome
      }).exec()
      .then(function(pObjeto) {
        _obj = pObjeto;
      });
    return _obj;
  };

  controller.remover = function(req, res) {
    var _id = req.params.id;
    _objeto.remove({
        "_id": _id
      }).exec()
      .then(function() {
          res.status(200).json('Registro removido com sucesso.');
        },
        function(erro) {
          console.error('Remover -> Erro: \n', erro);
          res.status(500).json(erro);
        });
  };

  controller.salvar = function(req, res) {
    var _body = req.body;

    if (_body._id) {
      _objeto.findByIdAndUpdate(_body._id, _body).exec()
        .then(function(pObjeto) {
            res.status(200).json(pObjeto);
          },
          function(erro) {
            console.error('Salvar -> Alterar -> Erro: \n', erro);
            res.status(500).json(erro);
          });
    } else {
      _objeto.create(_body)
        .then(function(pObjeto) {
            res.status(200).json(pObjeto);
          },
          function(erro) {
            console.error('Salvar -> Incluir -> Erro: \n', erro);
            res.status(500).json(erro);
          });
    }
  };

  return controller;
};
