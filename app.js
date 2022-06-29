require('dotenv/config');
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/', router);

require('./config').dbConnector();


app.listen(process.env.PORT, () => {
    console.log('server running on localhost:3000');
});