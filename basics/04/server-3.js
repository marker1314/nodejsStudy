// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)
//응답객체는 헤더와 본문으로 구성
//헤더에서 무슨 파일을 들고 올지 확인 

const http = require("http");

const server =  http.createServer((req,res) => {
    res.setHeader("Content-type","text/plain"); //일반 순수한 텍스트라는 뜻
    res.write("Hello, node");
    res.end(); //응답이 끝난다는것을 지정해주는거임
}); 

server.listen(3000,() => {
    console.log("서버가 실행 중");
}); //3000번 포트로 실행 요청
