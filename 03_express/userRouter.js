const express = require('express');

const app = express();
// userRouter 선언
const userRouter = express.Router();

const PORT = 4000;

// 임시 데이터베이스 만들어두고
const USERS = {
  id: 'test',
  name: '이찬호',
};

// 넘어오는 데이터 : req.params.id

// 회원 목록 조회
userRouter.get('/', (req, res) => {
  res.send(USERS);
  console.log('url  오면 zack 을 날려줌');
});
// 특정 회원 정보 확인
userRouter.get('/:id', (req, res) => {
  if (req.params.id === USERS.id) {
    res.send(USERS);
  } else {
    res.end('그런 아이디 없다');
  }
});

// 회원 등록
userRouter.post('/', (req, res) => {
  if (req.query.id && req.query.name) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
    };
    USERS[Object.keys(USERS).length + 1] = newUser;
    res.send('회원 등록완료');
    console.log(USERS);
  } else {
    res.send('다시하셈');
  }
});

// 회원 수정
userRouter.put('/1', (req, res) => {
  if (req.query.id === USERS.id) {
    USERS.name = req.query.name;
    res.send(USERS);
  } else {
    res.send('그런 정보없다');
  }
  console.log(USERS);
});

// 회원 삭제
userRouter.delete('/1', (req, res) => {
  console.log('회원 삭제');
  res.send('회원 삭제');
});

// userRouter에 의한 URL 요청을 /users 로 묶어준다.
app.use('/users', userRouter);

app.use('/', (req, res) => {
  res.end('hello');
});
app.listen(PORT, () => {
  console.log(`${PORT} 에서 실행중`);
});
