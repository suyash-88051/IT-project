const e = require("express");
var express = require("express");
var router = express.Router();

const credential = {
    email: "suyash@gmail.com",
    password: "1234"
}

router.post('/login', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route/profile');
        //res.end("Login Sucessful");
    } else {
        res.end("Invalid Username or password");
    }
});

router.get('/profile', (req, res) => {
    if (req.session.user) {
        res.render('profile', { user: req.session.user })
    } else {
        res.send("Unauthorised User");
    }
})
module.exports = router;