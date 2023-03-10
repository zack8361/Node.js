const express = require('express');

const Router = express.Router();

// ejs 예시
const USER = [
  {
    id: 'zack',
    name: '이찬호',
    email: 'zack6353@naver.com',
  },
  {
    id: 'heehee',
    name: '뽀로로',
    email: 'pororo@naver.com',
  },
];

// // http://localhost:4000/users
// Router.get('/', (req, res) => {
//   res.send(USER);
// });

// parmater 값으로 /id/:id 값이 넘어온 경우.
Router.get('/id/:id', (req, res) => {
  // id 값을 숫자 값으로 받아 USER[1] 번 을 send 해준다.
  const userData = USER.find((el) => el.id === req.params.id);
  console.log(userData);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다!');
    err.statusCode = 400;
    throw err;
  }
});

// 회원 등록 post 방식 (추가)
Router.post('/add', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
      email: req.query.email,
    };
    USER.push(newUser);
    res.send('회원 추가완료');
  } else {
    res.send('쿼리 입력이 잘못 되었습니다.');
  }
});

// 회원 수정 -> query 방식
Router.put('/modify/:id', (req, res) => {
  if (req.query.name && req.query.email) {
    const userIndex = USER.findIndex((el) => el.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정완료');
    } else {
      res.send('해당 ID 회원 정보 없다.');
    }
  } else {
    res.send('쿼리 입력이 잘못되었습니다.');
  }
});

// 회원 삭제
Router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((el) => el.id === req.params.id);
  if (userIndex !== -1) {
    // 시작 지점 부터 1개
    USER.splice(userIndex, 1);
    res.send('회원 삭제완료');
  } else {
    res.send('해당 ID 회원 정보 없다');
  }
});

// render = html 자체를 써버로 뿌려주는 역할
Router.get('/', (req, res) => {
  const userCounts = USER.length;
  // 배열 정보와 배열의 길이를 index.html 로 쏴준다.
  res.render('users', { USER, userCounts });
});

module.exports = Router;

// express 를 이용한 view engine 사용 -> ejs(embadded JavaScript)
