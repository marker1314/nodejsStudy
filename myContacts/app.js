const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express();

dbConnect();

 app.get('/', (req, res) => {
    res.send('Hello, Node!');
});

// 연락처 가져오기 

//app.get('/contacts', (req, res) => {  
//    res.send('Contacts Page'); 
//});

// post: 서버로 정보를 보낼 때 사용 (새 연락처 추가하기)
//app.post('/contacts', (req, res) => {     
//    res.send('Create Contacts'); 
//});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

//연락처 1개 가져오기
//app.get('/contacts/:id', (req, res) => {
//    res.send(`View Contact for ID : ${req.params.id}`);
//});

// put: 서버의 정보를 수정할 때 사용 (연락처 수정하기)
//app.put('/contacts/:id', (req, res) => {  
//    res.send(`Update Contact for ID : ${req.params.id}`); 
//});

// delete: 서버의 정보를 삭제할 때 사용 (연락처 삭제하기)
//app.delete('/contacts/:id', (req, res) => {  
//    res.send(`Delete Contact for ID : ${req.params.id}`); 
//});

app.listen(3000, () => {
    console.log('서버 실행 중');
});