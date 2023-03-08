const fs = require('fs');

fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(`1번 ${data}`);
  fs.readFile('readme.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(`2번 ${data}`);
    fs.readeFile('readme.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(`2번 ${data}`);
    });
  });
});
