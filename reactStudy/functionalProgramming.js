// 배열의 조인 함수. -> 배열의 모든 요소를 연결해 하나의 문자열로 만들어 반환 -> 원본 변환 x
const schools = ['seoul', 'yeonnsei', 'korea', 'hansung'];
console.log(schools.join(''));

// 배열의 Filter 함수. -> 배열의 모든 요소를 탐색하면서, 주어진 요건을 충족하느냐를 검사하여 결과 반환.
const schoolsFilter = schools.filter((sch) => sch[0] === 'y');
console.log(schoolsFilter);

// Filter 응용. -> 배열에 사용
const cutSchool = (cut, list) => schools.filter((sch) => sch != cut);
console.log(cutSchool('seoul', schools).join(','));

// map 사용
const highSchool = schools.map((sch) => `${sch}highSchool`);
console.log(highSchool.join(','));

// map 사용하여 객체 배열 만들기.
const mapSchool = schools.map((sch) => ({ name: sch }));
console.log(mapSchool);

// map 의 Object keys(object) => 객체를 전달받아 주어진 객체의 속성 이름을 열거하는 배열을 반환.
const user = {
  이찬호: 26,
  윤영서: 25,
  문준호: 24,
};
const userArray = Object.keys(user).map((csh) => ({
  name: csh,
  age: user[csh],
}));
console.log(user);
console.log(userArray);

// reduce 함수 -> 배열의 모든 요소에 대해서 콜백 수행 -> 하나의 결과값 반환. -> 배열 반환 x

const ages = [10, 20, 30, 40, 50, 60, 70];

const maxAges = ages.reduce((max, age, idx) => {
  if (age > max) {
    return age;
  } else {
    return max;
  }
});

console.log(maxAges);
