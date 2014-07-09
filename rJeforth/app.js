
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , ejs = require('ejs')
  , vis = require('./routes/vis')	// 2014.07.08 加入連結 RIO 的測試程式
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('.html', ejs.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/vis/rio', vis.rio);  // 2014.07.08 加入連結 RIO 的測試程式

http.createServer(app).listen(app.get('port'), function(){
  // console.log('Express server listening on port ' + app.get('port'));
  console.log('網頁服務器執行中。');
  console.log('服務器正在監聽 ' + app.get('port') + ' 端口');
});
