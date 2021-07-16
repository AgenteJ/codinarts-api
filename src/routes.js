const express = require('express')
const routes = express.Router();


const person = require("./controller/person.js");
routes.post("/person/add", person.create);
routes.get("/person/", person.findAll);
routes.get("/person/more/", person.findMoreAdress);
routes.get("/person/:cpf", person.findOne);
routes.put("/person/:cpf", person.update);
routes.delete("/person/:cpf", person.delete);

const contact = require("./controller/contact.js");
routes.post("/contact/add", contact.create);
routes.get("/contact/total/", contact.total);
routes.get("/contact/:id", contact.findAll);
routes.put("/contact/:id", contact.update);
routes.delete("/contact/:id", contact.delete);

const adress = require("./controller/adress.js");
routes.post("/adress/add", adress.create);
routes.get("/adress/:id", adress.findAll);
routes.put("/adress/:id", adress.update);
routes.delete("/adress/:id", adress.delete);

const guest = require("./controller/guest.js");
routes.post("/guest/add", guest.create);
routes.get("/guest/more/", guest.moreGuest);
routes.get("/guest/:id", guest.findAll);
routes.put("/guest/:id", guest.update);
routes.delete("/guest/:id", guest.delete);

module.exports = routes;