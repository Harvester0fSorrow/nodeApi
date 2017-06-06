module.exports = function(app) {
  var controller = require('../controllers/controller');

  app.get('/', function(req, res){
      res.sendFile('./html/index.html');
  });

  app.route('/api/Home')
    .get(controller.home);

  app.route('/api/Metadata/menu')
      .get(controller.metadata);

  app.route('/api/About')
      .get(controller.about);
};
