const express = require('express')
const bodyparser = require('body-parser');
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const router = require("./router");
const app = express();
const port = process.env.PORT || 3000;

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);

app.use(bodyparser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('base', { title: "Login System" })
})

app.listen(port, () => { console.log("Listening to the server on http://localhost:3000") });