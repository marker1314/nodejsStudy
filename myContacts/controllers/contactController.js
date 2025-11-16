const asynHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


//Get all contacts
//Get /contacts
const getAllContacts = asynHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.render("index",{contacts:contacts}); //데이터에서 가져온 값을 contacts라는 이름으로 index.ejs로 넘겨줘
});

//View add Contacts form
//Get /contacts/add
const addContactForm =(req,res)=>{
    res.render("add");
}

//Create contact
//POST/contacts/add
const createContact = asynHandler(async(req,res)=>{
    console.log(req.body);
    const{name,email,phone} =req.body; //구조할당
    if(!name||!email||!phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }

    const contact = await Contact.create({
        name,email,phone
    });
    res.send("Create contacts");
});

//Get single contact
const getOneContact = asynHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    res.render("update",{contact:contact});
});

//Update single contact
const updateOneContact = asynHandler(async(req,res)=>{
    const id= req.params.id;
    const{name,email,phone} =req.body;
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not found.");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    res.redirect("/contacts");
});

//Delete single contact
//Delete /contacts/:id
const deleteOneContact = asynHandler(async(req,res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/contacts");
});

module.exports = {getAllContacts, createContact, getOneContact, updateOneContact, deleteOneContact, addContactForm,};