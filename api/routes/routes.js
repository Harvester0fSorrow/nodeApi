module.exports = function(app) {
  var controller = require('../controllers/controller');

  app.get('/', function(req, res){
      res.sendFile('./html/index.html');
  });
  
  app.route('/list_all')
    .get(controller.list_all);
};
