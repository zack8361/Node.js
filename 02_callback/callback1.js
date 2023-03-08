const func1 = (callback) => {
  console.log('1번함수');
  callback();
};

const func2 = () => {
  console.log('2번함수');
};

const func3 = () => {
  console.log('3번함수');
};

func1(() => {
  console.log('2번 인척하는 새로 만든 익명함수');
});
