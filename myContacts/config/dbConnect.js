const mongoose = require("mongoose");
require("dotenv").config();

//async, await(비동기 처리)
const dbConnect = async()=>{
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT); //mongoose 모듈에서 connect함수를 이용해서 데이터베이스에 연결, ()안에는 주소
        console.log("DB Connected");
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;