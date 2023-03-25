// let str1 = 'hello my name is Lee Chan Ho';
// let str2 = '';

// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] === ' ') {
//     str2 += '-';
//   } else {
//     str2 += str1[i];
//   }
// }

// const str1 = 'hello my name is lee chan ho';
// const str2 = str1.replace(/ /g, '-');
// console.log(str2);
// --------------------------------------------------------------------------------------- //

// 1. 함수의 불변성. -> obj 를 넘겨주어 obj 의 rating 값이 변경되는것을 볼수있다.
// 원본 대신 데이터 구조의 복사본을 만들어서 수정 및 활용. -> 데이터 원본은 수정되지 않는다.
// let colorLawn = {
//   title: '잔디',
//   color: '#00FF00',
//   rating: 0,
// };

// const rateColor = (obj, rating) => {
//   obj.rating = rating;
//   return obj;
// };

// console.log(colorLawn.rating);
// console.log(rateColor(colorLawn, 5).rating);
// console.log(colorLawn.rating);

// 2번째 코드--------------------------------------------------------------------------------------- //
// let colorLawn = {
//   title: '잔디',
//   color: '#00FF00',
//   rating: 0,
// };

// const rateColor = (obj, rating) => ({
//   ...obj,
//   rating,
// });

// console.log(rateColor(colorLawn, 10));
// // console.log(colorLawn.rating);
// // console.log(rateColor(colorLawn, 5).rating);
// // console.log(colorLawn.rating);

// 3번째 코드--------------------------------------------------------------------------------------- //

// 1
// let list = [{ title: '이찬호' }, { title: '윤영서' }, { title: '남유빈' }];
// const addColor = (newTitle, colors) => {
//   colors.push({ title: newTitle });
//   return colors;
// };
// console.log(addColor('문준호', list));
// 2
// let list = [{ title: '이찬호' }, { title: '윤영서' }, { title: '남유빈' }];
// const addColor = (title, list) => [...list, { title }];
// console.log(addColor('현승엽', list));

// -------------------------------------------------------------------------------------------------

const str1 = {
  name: '이찬호',
  canRead: true,
  canWrite: true,
};

const selfEducate = (person) => ({
  ...person,
  canRead: false,
  canWrite: false,
});

console.log(selfEducate(str1));
console.log(str1);
