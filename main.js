// @ts-check

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('신기하네');
});

// 듣고 있다가 오면 포트 4000번 들어오면 실행
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
