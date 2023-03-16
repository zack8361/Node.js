// express 설정
const express = require('express');
// bodyParser 설정
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// ejs 선언.
app.set('view engine', 'ejs');

// bodyParser 을 선언하는 이유 -> form 태그에 있는 데이터들을 사용하기 위해서
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 라우터 설정 : 각자 이름의 부합한 라우터.
const boardRouter = require('./routes/board');

// 라우터들을 위한 미들웨어 설정 : app.use
app.use('/board', boardRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 실행중입니다.`);
});
