var path = require('path');

module.exports = function(app) {

  // api routes

  app.get('/api/blog', function(req, res){
     res.send({
       posts: [
         {
           title: 'First post',
           desc: 'so much information',
           content: 'wow',
         },
       ],
     });
  });

  app.get('/api/*', function(req, res){
     res.send({error: 'route not found'});
  });

  // app routes

  app.get('/*', function(req, res){
     res.sendFile(path.join(__dirname, '../../html', 'index.html'));
  });
};
