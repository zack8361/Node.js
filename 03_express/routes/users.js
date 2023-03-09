// @ts-check

const express = require('express');

const Router = express.Router();

const USER = {
  1: {
    email: 'zack',
    name: '이찬호',
  },
  2: {
    email: 'ck',
    name: '이찬호',
  },
};

// ejs 예시
const USER_ARR = [
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
  const userData = USER[req.params.id];
  console.log(userData);
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

// 회원 등록 post 방식 (추가)
Router.post('/add', (req, res) => {
  // id와 name 이 잘넘어온다면
  if (req.query.id && req.query.name) {
    // 넘어온 id 와 name 을 가지고 객체를 만든다.
    const newUser = {
      id: req.query.id,
      name: req.query.name,
    };
    // 객체의 키값을 하나 늘려주면서 newUser 값을 키에 맞게 삽입한다.->이부분 다시보기
    USER[Object.keys(USER).length + 1] = newUser;
    res.send('회원 등록완료');
  } else {
    res.end('Unexpected query');
  }
});

// 회원 수정 -> query 방식
Router.put('/modify/:id', (req, res) => {
  // 쿼리 값으로 email 과 이름이 들어온 경우에만 수정을해라.
  if (req.query.email && req.query.name) {
    if (req.params.id in USER) {
      // req.params.id 값이 USER에 키값으로 있으면?
      USER[req.params.id] = {
        email: req.query.email,
        name: req.query.name,
      };
      res.send('회원 정보 수정완료');
    } else {
      res.send('해당 ID를 가진 회원이 존재하지않습니다.');
    }
  } else {
    res.send('쿼리 입력을 확인해주세요');
  }
});

// 회원 삭제
Router.delete('/delete/id/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원 삭제완료');
  } else {
    res.send('회원 정보를 가진 사람이 없다.');
  }
});

Router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page');
  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER ID is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

// render = html 자체를 써버로 뿌려주는 역할
Router.get('/', (req, res) => {
  const userCounts = USER_ARR.length;
  // 배열 정보와 배열의 길이를 index.html 로 쏴준다.
  res.render('users', { USER_ARR, userCounts });
});

module.exports = Router;

// express 를 이용한 view engine 사용 -> ejs(embadded JavaScript)
