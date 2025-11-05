// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)

const http = require("http");

const server =  http.createServer((req,res) => {
    console.log(req);
}); //callback으로 요청, 응답

server.listen(3000,() => {
    console.log("서버가 실행 중");
}); //3000번 포트로 실행 요청
