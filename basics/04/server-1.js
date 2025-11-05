// HTTP 모듈로 서버 만들고 실행하기 (결과 비교 파일 : 04\results\server-1.js)

const http = require("http");

//서버를 만듦
const server = http.createServer((req,res)=>{
    console.log("요청 발생");
});

//listen함수를 이용해서 실행_포트번호 지정해야함
server.listen(3000,()=>{
    console.log("서버 실행 중");
});

//"요청 발생"을 보기 위해서는 웹브라우저에 가서
//localhost : 사용자 컴퓨터에 만들어진 서버를 가리키는 키워드
//포트번호가 3000이니까 localhost:3000 이라고 입력
//실행중인 서버를 중지시키려면 Ctrl + C