//ROuter 코드를 별도로 사용

const express = require("express");
const router = express.Router();
const {getAllContacts, createContact, getOneContact, updateOneContact, deleteOneContact} = require("../controllers/contactController");

//Router 객체 사용
router.route("/")
    .get(getAllContacts) //controller 함수를 찾아가서 확인
    .post(createContact);


router.route("/:id")
.get(getOneContact)
.put(updateOneContact)
.delete(deleteOneContact)

module.exports = router;