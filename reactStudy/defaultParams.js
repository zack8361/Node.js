// 1) 배열 뒤집기  + Spread 연산자.
// const arr1 = ['안녕', '병신', '찐따'];
// const reverseArr = [...arr1].reverse();

// const arr2 = ['나는', '민수', '임다'];
// const arr3 = [...arr1, ...arr2];

// console.log(arr1);
// console.log(reverseArr);
// console.log(arr3);

// -------------------------------------------------//

// 2) 스프레드 연산자 params
const directions = (...args) => {
  // start = 1번째 원소, remaining = 나머지 원소.
  const [start, ...remaining] = args;
  const [finish, ...stops] = remaining.reverse();
  console.log(start);
  console.log(finish);
};

directions('서울', '부산', '창원', '마산', '수원');
