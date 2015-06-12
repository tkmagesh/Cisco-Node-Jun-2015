var http = require('http');
var serveStatic = require('./serveStatic'),
    dataParser = require('./dataParser'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction'),
    app = require('./app');

app.use(dataParser);
app.use(serveStatic);
app.use(calculatorProcessor);
//app.use(notFoundAction);

var server = http.createServer(app.run());
server.listen(8080);
