// 아래 함수 표현식을 화살표 함수로 바꾸기  (결과 비교 : 02\results\arrow-1.js)

// 함수 표현식
// let hi = function() {
//   return '안녕하세요?';
// };

// 화살표 함수
//let hi =() => {return `안녕하세요?`};
// function과 return 같은것들을 되도록 사용하지 않도록.
//function 생략하고 매개변수 없으니까 그냥 괄호만 씀
//그리고 함수 안에서 실행할 내용이 한 줄 밖에 없고, 그게 return 문이 포함되어있으면 return 생략 가능
//한줄 밖에 없으면 중괄호 필요x
let hi =() => `안녕하세요?`;
console.log(hi());