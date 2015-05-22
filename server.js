var express = require('express');
var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

redis.once('connect', onRedis);

express()
  .use(sayHi)
  .listen(process.env.PORT || 3000, onListen);

function sayHi(req, res, next) {
  res.send("What's up?");
}

function onListen(err) {
  if (err) throw err;
  console.log('listening on', (process.env.PORT || 3000));
}

function onRedis() {
  console.log('connected to redis');
}
