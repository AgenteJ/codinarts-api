const Sequelize = require("sequelize");
const dotenv = require('dotenv');
const person = require("./person.js");
const contact = require("./contact.js")
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT 
});

sequelize.authenticate().then(() => {
  console.log('Connected!');
}).catch(err => {
  console.error('Not connected.', err);
});

const db = {Sequelize, sequelize};

db.person =  person(sequelize, Sequelize);
db.contact = contact(sequelize, Sequelize);
  
module.exports = db;  
  