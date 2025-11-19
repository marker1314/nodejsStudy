//애플리케이션 전체 시작 파일
//==> 라우트코드는 파일로 저장 후 모듈로 사용
const express=require("express");
const dbConnect=require("./config/dbConnect");
const app=express();      //app이 앞으로 우리가 처리할 대상이 되었네. 

app.set("view engine","ejs");
app.set("views","./views");

dbConnect();

app.get("/",(req,res)=>{
    res.send("Hello,node!");
}); //이게 라우트 코드임.c
//서버 이름 뒤에 요청방식 & 요청 경로 & 어떤걸 실행할지는 콜백 함수 형태로 제공

//HTTP 모듈 : if, else if 이용 => 경로&요청 방식 체크
//express 서버 : 요청 방식을 함수 이름으로 사용함
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/contacts",require("./routes/contactRoutes"));
//미들웨어를 사용했다는 것을 애플리케이션한테 알려줘야함
//==> app.use(내가 사용한 미들웨어);'

app.listen(3000,()=>{
    console.log("서버 실행 중");
})