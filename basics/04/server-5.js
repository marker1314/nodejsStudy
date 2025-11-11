// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

// 라우팅 : 클라이언트에서 들어오는 요청에 따라 그에 맞는 함수를 실행하는 것
// 요청 메서드 Get, Post, Put, Delete 같은 거 사용
// Ex : naver.com/about, naver.com/download


const http = require("http");

const server =  http.createServer((req,res) => {
    
    //req.url : 요청 경로 , req.method : 요청 방식
    const{url, method} = req; //구조분해할당(Destructing)
    //const url = req url;
    //const method = req method;
    
    res.setHeader("Content-type","text/plain"); 

    if(method == "GET" && url == "/home"){
        res.write("HOME");
        res.end();
    }else if(method == "GET" && url == "/about"){
        res.end("ABOUT");
    }else{
        res.end("NOT FOUND");
    }
}); 

server.listen(3000,() => {
    console.log("서버가 실행 중");
}); 
