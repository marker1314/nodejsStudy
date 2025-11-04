// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)
// readfile : 파일을 읽어오는 함수

const ab = require("fs")

ab.readFile("./example.txt", "utf8", (err,data) => {
    if(err){
        console.log(err);
    }
  console.log(data)  
  
  ab.writeFile("./test.txt", data, (err) => {
    if(err){
        console.log(err);
    }
    console.log("text.txt is saved");
  })
})

// 인코딩 저장 안하면 바이너리 값으로 불러옴
// writefile : 파일에 기록하는 함수