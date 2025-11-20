const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm
} = require("../controllers/contactController");


router.route("/")//route 쓰는거에서 둘다 contacts 라서 공통 단어 빼서 app.js 쪽에 넣음
    .get(getAllContacts) ;   //여기에 세미콜론 붙이면 X!! router.route("경로").get().post(); 구조임.
   
router.route("/add").get(addContactForm) .post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
module.exports=router;

// //연락처 가져오기
// app.get("/contacts",(req,res)=>{
//     res.send("Contacts Page");
// });
// //nodemon이라는 모듈을 사용하면 서버를 수정했을때  재시작 없이 바로 다시 돌려볼 수 있음

// //새 연락처 추가하기
// app.post("/contacts",(req,res)=>{
//     res.send(`Create Contacts`);
// });




// //연락처 1개 가져오기
// app.get(`/contacts/:id`,(req,res)=>{
//     res.send(`View Contact for ID : ${req.params.id}`);
// })

// //연락처 수정하기
// app.put("/contacts/:id",(req,res)=>{
//     res.send(`Update Contact for ID : ${req.params.id}`);
// })

// //연락처 삭제하기
// app.delete("/contacts/:id",(req,res)=>{
//     res.send(`Delete Contacts for ID : ${req.params.id}`);
// })


//post : 서버로 정보를 보낼 떄 사용하는 방식
//put : 기존에 서버에 있던 자료를 수정할 때 사용하는 방식
//delete : 서버에 있는 자료를 삭제하려고 할 때