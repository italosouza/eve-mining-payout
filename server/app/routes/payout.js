module.exports = function(app) {
  var controller = app.controllers.payout;
  var auth = app.services.auth;

  app.route('/payout')
    .get(controller.listar)
    .post(controller.processar);

  app.route('/payout/:id')
    .get(auth.validarAutenticacao, controller.buscar)
    .put(auth.validarAutenticacao, controller.salvar)
    .delete(auth.validarAutenticacao, controller.remover);
};
