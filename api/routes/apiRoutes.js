module.exports = function(app) {
  var controller = require('../controllers/controller');

  app.route('/api/About')
      .get(controller.about);
};
