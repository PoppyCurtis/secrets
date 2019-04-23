const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.render(__dirname + "/views/home.ejs");
});
app.get("/login", function(req, res) {
    res.render(__dirname + "/views/login.ejs");
});
app.get("/register", function(req, res) {
    res.render(__dirname + "/views/register.ejs");
});
app.listen(3000, function(req, res) {
    console.log("Server running on port 3000");
});