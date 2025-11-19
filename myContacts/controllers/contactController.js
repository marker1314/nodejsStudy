const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
// Get /contacts

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    res.render("index", { contacts: contacts });
});

// View add Contact Form
// Get /contacts/add
const addContactForm = (req, res) => {
    res.render("add");
};

// create contact
// Post /contacts/add
const createContacts = asyncHandler(async (req, res) => {
        console.log(req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.send("필수 값이 입력되지 않았습니다.");
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
        });
        res.send("Create Contacts");
});

// Get Contact
// Get /contacts/:id
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render("update", { contact: contact });
});

// Update Contact
// Put /contacts/:id
const updateContacts = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, email, phone} = req.body;
    const contact = await Contact.findById(id);
    if (!contact) {
        throw new Error("Contact not found");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    
    contact.save();

    res.redirect("/contacts");
});

const deleteContacts = asyncHandler(async (req, res) => {
    const id = req.params.id;
    
    await Contact.findByIdAndDelete(id);
    res.redirect("/contacts");
});

module.exports = { 
    getAllContacts, 
    createContacts,
    getContacts,
    updateContacts,
    deleteContacts,
    addContactForm,
};