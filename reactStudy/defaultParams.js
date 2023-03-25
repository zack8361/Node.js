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
// const directions = (...args) => {
//   // start = 1번째 원소, remaining = 나머지 원소.
//   const [start, ...remaining] = args;
//   const [finish, ...stops] = remaining.reverse();
//   console.log(start);
//   console.log(finish);
//   console.log(stops);
// };

// directions('서울', '부산', '창원', '마산', '수원');

// "https://api.randomuser.me/?nat=US&results=10"
import fetch from 'node-fetch';

const getFakeMembers = async () => {
  try {
    const response = await fetch(
      'https://api.randomuser.me/?nat=US&results=10'
    );
    const { results } = await response.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getFakeMembers();
