// @ts-check

// express(프레임워크), cors  모듈 가져오기 -> require 하기
const express = require('express');
const cors = require('cors');

const PORT = 4000;
// app 에 express를 실행시켜 넣어준다.
const app = express();
// app 에 필요한 모듈들을 넣어준다.
app.use(cors());

// "/" 이 요청되면 안의 함수를 실행해라
app.use('/', (req, res) => {
  const str = '안녕하세요. 여기는 백엔드 입니다!';
  const json = JSON.stringify(str);
  res.send(json);
});

// 넘어온 포트번에서 서버가 실행 시켜주면 화살표 안의 함수 실행.
app.listen(PORT, () => {
  console.log(`${PORT} 에서 실행중`);
});
