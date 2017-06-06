module.exports = function(app) {
  var controller = require('../controllers/controller');

  app.route('/api/Home')
    .get(controller.home);

  app.route('/api/Metadata/menu')
      .get(controller.metadata);

  app.route('/api/About')
      .get(controller.about);
};
