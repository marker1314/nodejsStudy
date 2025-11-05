// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)

const path=require("path");
//path모듈을 쓰기 위해서

const fullPath= path.join(`some`,`work`,`ex.txt`);
//문자열을 묶어서 경로로 만들어줘!

//console.log(fullPath);

//경로만 추출 dirname
const dir=path.dirname(fullPath);
//console.log(dir);
//파일 이름 제거한 경로만 추출하게 됨


//파일 이름만 추출 basename
const fn1=path.basename(__filename)
console.log(`전체 경로(__filename) : ${__filename}`);
console.log(fn1);
//js라는 확장자 빼고 가져와보자
const fn2=path.basename(__filename,'.js');
console.log(fn2);