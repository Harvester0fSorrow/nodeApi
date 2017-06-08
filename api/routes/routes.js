var path = require('path');

module.exports = function(app) {

  app.get('/api/*', function(req, res){
     res.send({error: 'route not found'});
  });

  app.get('/*', function(req, res){
     res.sendFile(path.join(__dirname, '../../html', 'index.html'));
  });
};
