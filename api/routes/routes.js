var path = require('path');

module.exports = function(app) {

  // api routes

  app.get('/api/blog/last', function(req, res){
     res.send({
       post:
         {
           title: 'And so it begins...',
           date: new Date().toDateString(),
           content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, '+
           'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
           'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '+
           'ut aliquip ex ea commodo consequat. </p>'+
           '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum '+
           'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, '+
           'sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'+
           '<p>Next time I should write something in english...</p>'+
           '<p style="text-indent:0;text-align: center;margin-top:50px;margin-bottom:0;">to be continued...</span>',
         },
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
