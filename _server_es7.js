import express from 'express';

let wrap = fn => (...args) => fn(...args).catch(args[2]);

var delay = (time) => new Promise(resolve => setTimeout(resolve, time));

var app = express();

//https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/
app.use(wrap( async (req, res) => {
  await delay(200);
  res.status(200).send(Date.now()+'');
}));

var server = app.listen(3000);