var express = require('express');
var logger = require('./util/loggerFactory').mainLog;

var env  = process.argv[2] || "DEV";
var db  = require('./models/db');
var cookies = require('cookies').express;
var validateSession = require('./util/validateSession');

process.env.APP_ENVIRONMENT = "DEV";

var app = express();
var RedisStore = require('connect-redis')(express);

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    db: 2
  }),
  secret: 'QpA;Z/woSlX.'
}));
app.use(express.methodOverride());
app.use(express.static('../app'));
app.use(validateSession);
app.use(app.router);





var controllers = {
  "result":require('./results'),
  "user":require('./users'),
  "team":require('./teams')
}

app.post('/api/result',controllers.result(app).add);
app.get('/api/result/:id',controllers.result(app).get);
app.del('/api/result/:id',controllers.result(app).remove);
app.get('/api/result',controllers.result(app).list);

app.post('/api/user',controllers.user(app).add);
app.post('/api/user/login',controllers.user(app).login);
app.post('/api/user/logout',controllers.user(app).logout);

app.post('/api/team',controllers.team(app).add);
app.get('/api/teams',controllers.team(app).list);
app.del('/api/team/:teamId',controllers.team(app).remove);

db.connect(function (err){
  var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
    logger.info({"msg":"started"});
  });
});

process.on('SIGTERM', function (){
  console.log("shutting down");
  db.disconnect(function(){

  });
});


