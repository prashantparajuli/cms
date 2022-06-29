const sequelize = require('sequelize');
const db = require('../models');
const dbConnector = () => {
    console.log("might get stuck here")
    db.sequelize.authenticate().then(() => {
        console.log("mysql connected");
    }).catch(err => {
        console.log("Error connecting to db: ", err);
    })
}
module.exports = dbConnector;