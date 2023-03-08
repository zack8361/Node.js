const express = require('express');

const app = express();

const PORT = 4000;

// 프론트에서 localhost:4000/email/zack6353@naver.com/password/paul2858/name/이찬호/gender/남자
// 형식으로 요청이온다.
app.get(
  '/email/:email/password/:password/name/:name/gender/:gender',
  (req, res) => {
    console.log(req.params);
    res.send(req.params);
  }
);

// 프론트에서 localhost:4000?email=zack6353@naver.com&password=paul2858&name=이찬호&gender=남자
// 형식으로 요청된다.
app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.listen(PORT, () => {
  console.log(`${PORT} 번에서 실행중이다`);
});
