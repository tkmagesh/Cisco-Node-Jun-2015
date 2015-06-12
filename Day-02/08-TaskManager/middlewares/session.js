var guid = require('guid');
var sessionStore = {};

function createSession(req, res){
    var newSessionId = guid.raw();
    sessionStore[newSessionId] = {};
    res.cookie('sessionId', newSessionId);
    return newSessionId;
}

module.exports = function(req, res, next){
    var sessionId = req.cookies['sessionId'] || createSession(req, res);
    sessionStore[sessionId] = sessionStore[sessionId] || {};
    req.session = sessionStore[sessionId];
    next();
}
