var http = require('http');
var serveStatic = require('./middlewares/serveStatic'),
    dataParser = require('./middlewares/dataParser'),
    calculatorProcessor = require('./middlewares/calculatorProcessor'),
    notFoundAction = require('./middlewares/notFoundAction'),
    app = require('./middlewares/app');

app.use(dataParser);
app.use(serveStatic());
app.use(calculatorProcessor);
app.use(notFoundAction);

var server = http.createServer(app.run());
server.listen(8080);
