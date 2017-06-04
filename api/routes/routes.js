module.exports = function(app) {
  var controller = require('../controllers/controller');


  // todoList Routes
  app.route('/list_all')
    .get(controller.list_all);
};
