const express = require("express");
const app = express(); //http 모듈과 다르게 express 함수 실행 시 서버 만들어짐

app.get("/",(req,res)=>{
    res.send("Hello,Node!");
}); //http 모듈과 다르게 익스프레스에서는 요청방식을 함수로 받을 수 있음, 즉 if~else문으로 나눌 필요 X(경로와 요청방식을)
//nodemon을 사용하면 수정한 내용을 저장만 하면 바로 적용, 없으면 서버 껏다가 저장하고 다시 켜야됨


//연락처 가져오기
app.get("/contacts",(req,res)=>{
    res.send("Contacts Page");
})

//연락처 1개 가져오기
app.get("/contacts/:id",(req,res)=>{
    res.send(`View Contact for ID : ${req.params.id}`);
});

//POST : 연락처 추가하기 
app.post("/contacts",(req,res)=>{
    res.send("Create contacts");
})

//PUT : 연락처 수정하기
app.put("/contacts/:id",(req,res)=>{
    res.send(`Update Contact for ID : ${req.params.id}`);
    });

//DEL : 연락처 삭제하기
app.delete("/contacts/:id",(req,res)=>{
    res.send(`Delete Contact for ID : ${req.params.id}`);
});



app.listen(3000,() => {
    console.log("서버 실행 중");
});



/*
[익스프레스를 사용하는 이유]
 - Http  모듈의 기능외에도 다양한 기능
 - 라우팅 하기 편함
 - 템플릿 엔진(웹 브라우저에 어떻게 나올지 결정하는)을 가져다 사용 가능
 - 미들웨어 : 클라이언트의 요청과 서버의 응답 사이에엇 중간에 처리하고 싶은 함수들을 쉽게 다룰 수 있음

[익스프레스 요청 객체의 속성]
-req.body : 서버로 POST요청할 떄 넘겨준 정보를 담고 있다.
- req.cookies : 클라이언트에 저장된 쿠키정보를 서버로 함께 넘겼을 경우 쿠키 정보를 담고 있다
- req.headers : 서버로 요청을 보낼때 같이 보낸 헤더 정보를 담고 있다
- req.params : URL 뒤에 라우트 파라미터가 포함되어 있을 경우 파라미터 정보를 담고 있다.
- req.query : 요청 URL에 포함된 질의 매개변수(쿼리)를 담고 있음

[익스프레스 응답 객체의 함수 ]
- res.download : 파일을 내려받음
- res.end : 프로세스 종료
등등

[요청방식]
- GET : 서버에서 클라이언트로 어떤 정보를 가져오는 것을 의미 
- POST : 사용자가 입력한 정보를 서버로 보낼 떄 사용
- PUT : 기존 서버에 있는 정보를 수정할떄
- DELETE : 서버에 있는 정보를 삭제할떄

[선더 클라이언트]
- 테스트용

[라우트 파라미터]
- URL뒤에 :를 붙인 후 그 뒤에 변수 작성
- 실제로 받아올떄는 조건값

[여기서의 코드]
- GET: 연락처 가져오기
- PUT : 연락처 수정하기
- DELETE : 연락처 수정하기 
* 라우트 파라미터를 사용해 특정 연락처에만 적용

*/