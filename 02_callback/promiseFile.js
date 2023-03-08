const fs = require('fs').promises;

fs.readFile('readme.txt', 'utf-8')
  .then((data) => {
    console.log('1번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data);
  })
  .catch((error) => {
    console.log(error);
  });
