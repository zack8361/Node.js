const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// 메인 페이지 생성
const mainRouter = require('./routes/index');

// 회원관련 라우터 생성.
const userRouter = require('./routes/users');

// Board 관련 라우터 생성.
const boardRouter = require('./routes/posts');

// ejs 선언
app.set('view engine', 'ejs');

// bodyParser 을 선언 하는이유 -> form 태그에 있는 데이터들을 req.body 에 담기위해.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 라우터를 위한 미들웨어 설정 : use
// /users 라는 url 로 들어오면 -> userRouter 로 처리해준다.
app.use('/users', userRouter);

// localhost:4000/으로 들어오면 mainRouter 로 처리해준다.
app.use('/', mainRouter);

// localhost:4000/posts/
app.use('/posts', boardRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`${PORT} 번에서 실행중입니다.`);
});
