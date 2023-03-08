const funcHell = (callback) => {
  callback();
};

funcHell(() => {
  console.log('1번인척 하는 익명함수');

  funcHell(() => {
    setTimeout(() => {
      console.log('2번인척 하는 익명함수');
    }, 1000);
    funcHell(() => {
      console.log('3번인척 하는 익명함수');
    });
  });
});
