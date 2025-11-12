// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)

// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)
const http = require("http");

//서버를 만듦
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/plain");
    
    //res.url : 요청 경로
    //req.method : 요청 방식
    const{url,method}=req;
    //const url=req.url;
    //const method=req.method;
    //라는 뜻임 : 구조분해할당

    if(method==="GET"&&url==="/home"){
        res.write("HOME");
        res.end();
    }else if(method==="GET"&&url==="/about"){
        res.end("ABOUT");//write가 하나면 이렇게 써도 됨
    }else{
        res.end("Not Found");
    }
});

//listen함수를 이용해서 실행_포트번호 지정해야함
server.listen(3000,()=>{
    console.log("서버 실행 중");
});