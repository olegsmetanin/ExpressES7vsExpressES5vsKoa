var koa = require('koa');
var app = koa();

function wait(ms) {
  return function(done) {
    setTimeout(done, ms);
  }
}

app.use(function *(){
  yield wait(200);
  this.body = Date.now()+'';
});

app.listen(3000);