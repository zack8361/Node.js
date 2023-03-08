// @ts-check

const express = require('express');

const server = express();

const PORT = 4000;

// 미들웨어 설정
server.use('/', (req, res, next) => {
  // res.send('Hello Express');
  console.log('미들웨어 1번');
  req.reqTime = new Date();
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2번');
  res.send(`요청시간은 ? ${req.reqTime}`);
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 3번');
});

server.listen(PORT, () => {
  console.log(`UKCRANINA ${PORT}`);
});
