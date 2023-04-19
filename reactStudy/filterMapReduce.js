const person = ['이찬호1', '공희진', '황윤규1', '2이하나'];
// console.log(person.join(' '));
const persons = {
  이찬호: 256,
  공희진: 25,
};
// FILTER 1 -> 조건에 부합 하는것을 필터링 해준다.
const personFilter = person.filter((sch) => sch[0] === '공');
// console.log(personFilter.join(''));

// FILTER 2
const personFilter2 = (cut, list) => list.filter((sch) => sch !== cut);
// console.log(personFilter2('공희진', person).join(','));

// ---------------------------------------MAP ---------------------------------------------------------------------------
// Map 1 -> map 이란 요소를 일괄적으로 변경하는것이다.
const personMap = person.map((sch) => {
  return sch;
});
// console.log(personMap);

// Map 2
const personMap2 = person.map((sch) => `${sch} highschool`);
// console.log(personMap2);

// Map 3
const personMap3 = person.map((sch) => {
  return { name: sch };
});
// console.log(personMap3);

// Map 4 -> 객체에 바로쓸수없다.
const user = {
  공희진: 24,
  이찬호: 26,
  이재호: 23,
};
const userMap = Object.keys(user).map((sch) => {
  return {
    user: sch,
    age: user[sch],
  };
});
// console.log(userMap);

// --------------------------------------------------------------------
// reduce 1 함수 -> 배열의 모든 요소에 대해서 콜백 수행
const users = [10, 20, 30, 40, 50, 60, 70];
const max = users.reduce((max, values) => (values > max ? values : max));

// Reduce 2
const colors = [
  // 객체를 담고 있는 배열 생성.
  {
    id: 'red',
    title: '빨강',
    rating: 3,
  },
  {
    id: 'blue',
    title: '파랑',
    rating: 2,
  },
  {
    id: 'yellow',
    title: '노랑',
    rating: 1,
  },
];
const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);
