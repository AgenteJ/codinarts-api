'use strict';
const Sequelize = require("sequelize");
const dotenv = require('dotenv');
const person = require("./person.js");
const contact = require("./contact.js")
const adress = require("./adress.js")
const guest = require("./guest.js")

dotenv.config();

const temp = new Sequelize(
  "",
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

module.exports = (async function () {
  return await temp.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`).then(() => {

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

    const db = { Sequelize, sequelize };

    db.person = person(sequelize, Sequelize);
    db.contact = contact(sequelize, Sequelize);
    db.adress = adress(sequelize, Sequelize);
    db.guest = guest(sequelize, Sequelize);

    sequelize.sync().then(() => {
      console.log("------------------------------- sync---------------------------");
    });
    return db;
  });

})();
