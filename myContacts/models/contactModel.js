const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
    },
    phone : {
        type : String,
        required : [true,"전화번호를 꼭 기입해 주세요."]
    }
    },
    {
        timestamps: true  //업데이트 시간을 자동으로 기록해줌
    
})

//스키마 ->모델
//mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact",contactSchema); //앞에서 만든 contactSchema를 모델로 만들기, 변수로 만드는 이유는 모듈로 만들기 위함

module.exports = Contact;