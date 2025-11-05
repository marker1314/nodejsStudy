// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
//현재 폴더에 있는 파일들을 읽어오는 함수
const fs=require("fs");

fs.readdir("./",(err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
});
