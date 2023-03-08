// @ts-check

const fs = require('fs');

// 파일 읽기 테스트
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 파일 쓰기 테스트
const str = '파일 쓰기 테스트 입니다';
fs.writeFile('readme.txt', str, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('성공이다');
  }
});
