// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)
const http = require("http");

//서버를 만듦
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/plain");
    res.write("hello node");
    res.end();
});

//listen함수를 이용해서 실행_포트번호 지정해야함
server.listen(3000,()=>{
    console.log("서버 실행 중");
});