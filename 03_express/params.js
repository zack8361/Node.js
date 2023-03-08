// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

// Parameter 를 받는 방법.
app.get('/id/:id', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

// localhost:4000?id=zack8361&password=paul2858 형식으로 url 받는다.
app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send('api 요청이 접수 되엇습니다.');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번 실행중`);
});
