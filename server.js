var express = require('express');
var path = require('path');
var routes = require('./api/routes/routes');
var rootHtmlPath = path.join(__dirname, 'html');
var rootDistPath = path.join(__dirname, 'dist');

app = express();
port = process.env.PORT || 8080;
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootHtmlPath));
app.use(express.static(rootDistPath));

routes(app);

app.use(function(req, res) {
    res.status(404)
        .sendFile(rootHtmlPath + '/notFound.html');
});

app.listen(port);

console.log('RESTFull API started on: ' + port);
