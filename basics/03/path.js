// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)

const path = require("path"); //path 모듈 불러오기

// join (경로를 합쳐줌)
const fullpath = path.join('some','work','ex.txt'); 
console.log(fullpath);

// dirname (경로만 추출, 즉 파일 이름 제거)
const dir = path.dirname(fullpath);
console.log(dir);

// basename (파일 이름만 추출)
const filename1 = path.basename(__filename); //글로벌 모듈 __filename -> 전체경로를 담고 있음
console.log(`전체경로 : ${__filename}`);
console.log(filename1);

//+ 확장자 제거 
const filename2 = path.basename(__filename,'.js'); //.js 제거
console.log(filename2);