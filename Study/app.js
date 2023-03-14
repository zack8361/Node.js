// express 설정
const express = require('express');
// bodyParser 설정
const bodyParser = require('body-parser');
// session 설정
const session = require('express-session');

const app = express();
const PORT = 4000;

// ejs 선언.
app.set('view engine', 'ejs');

// bodyParser 을 선언하는 이유 -> form 태그에 있는 데이터들을 사용하기 위해서
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// session 사용
app.use(
  session({
    secret: 'tetz',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
// 라우터 설정 : 각자 이름의 부합한 라우터.
const boardRouter = require('./routes/board');
// home router 설정
const homeRouter = require('./routes/home');
// login router 설정
const loginRouter = require('./routes/login');
// register router 설정
const registerRouter = require('./routes/register');

// 라우터들을 위한 미들웨어 설정 : app.use
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/board', boardRouter);
app.use('/', homeRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 실행중입니다.`);
});
