const lucky = true;

const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다.');

  setTimeout(() => {
    console.log('3년의 시간이 흐르고.....');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('망함');
    }
  }, 1000);
});

promise
  .then((msg) => {
    console.log(`${msg} 만큼의 배당금을 받았습니다.`);
  })
  .catch((err) => {
    console.log(err);
  });
