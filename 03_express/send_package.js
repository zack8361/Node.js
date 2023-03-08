// @ts-check
// 패키지를 불러오는 코드
const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 4000;

app.use('/', async (req, res, next) => {
  console.log('미들웨어 1번');
  req.reqTime = new Date();
  req.fileContent = await fs.readFile('../package.json', 'utf-8');
  next();
});

app.use('/', async (req, res, next) => {
  console.log('미들웨어 2번');
  console.log(req.fileContent);
  res.send(`데이터 시간은 ${req.reqTime}`);
});

app.listen(PORT, () => {
  console.log(`PORT PORT = ${PORT}`);
});
