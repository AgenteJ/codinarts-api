const express = require('express')
const routes = express.Router();


const person = require("./controller/person.js");
routes.post("/person/add", person.create);
routes.get("/person/", person.findAll);
routes.get("/person/:cpf", person.findOne);
routes.put("/person/:cpf", person.update);
routes.delete("/person/:cpf", person.delete);

const contact = require("./controller/contact.js");
routes.post("/contact/add", contact.create);
routes.get("/contact/:id", contact.findAll);
routes.put("/contact/:id", contact.update);
routes.delete("/contact/:id", contact.delete);


module.exports = routes;