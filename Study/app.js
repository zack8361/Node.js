// express 설정
const express = require('express');
// bodyParser 설정
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// // userRouter 선언.
const userRouter = require('./routes/users');
// mainRouter 선언.
const mainRouter = require('./routes/main');

// ejs 선언.
app.set('view engine', 'ejs');

// bodyParser 을 선언하는 이유 -> form 태그에 있는 데이터들을 사용하기 위해서
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 라우터들을 위한 미들웨어 설정 : app.use

// 1. userRouter = localhost:4000/users 로 설정
app.use('/users', userRouter);

// 2. mainRouter = localhost:4000/ 로실행
app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 실행중입니다.`);
});
