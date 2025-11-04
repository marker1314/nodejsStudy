// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
// readdir : 비동기 : 경로 읽기 함수(현재 폴더에 있는 파일을 읽어오는 함수)
// readdirSync : 동기로 처리 

const fs = require("fs"); //파일 시스템의 모듈을 가져옴

fs.readdir('./',(err,files) => {  //readdir은 경로와 콜백함수를 받음. 예시에선 매개변수가 err,files
    if(err){
        console.log(err);
    }
    console.log(files);
});
//결과 03 파일에 있는 모든 파일을 불러옴 because ./ 
//만약 ../ => 상위폴더 {01,02,03,04,05}