const express = require('express')
const routes = require('./routes')
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
dotenv.config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});
/* const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});  */

app.listen(process.env.PORT || 5000) 