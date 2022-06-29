const express = require('express');
const db = require('./models');
const app = express();
const path = require('path');
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('./auth/login');
})
const dbConnector = () => {
    console.log("might get stuck here")
    db.sequelize.authenticate().then(() => {
        console.log("mysql connected");
    }).catch(err => {
        console.log("Error connecting to db: ", err);
    })
}
dbConnector();
app.listen(3000, () => {
    console.log('server running on localhost:3000');
});