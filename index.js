const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname,"/public/CSS")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen( port, () => {
    console.log(`listening to port ${port}`);
})
app.get("/", (req, res) => {
    res.render("home.ejs");
})
app.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs");
})
app.get("/career", (req, res) => {
    res.render("career.ejs");
})
app.get("/skills", (req, res) => {
    res.render("skills.ejs");
})
app.get("/projects", (req, res) => {
    res.render("projects.ejs");
})
app.get("/experience", (req, res) => {
    res.render("experience.ejs");
})
app.get("/education", (req, res) => {
    res.render("education.ejs");
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})
app.get("/connect", (req, res) => {
    res.render("connect.ejs");
})
app.get("*", (req, res) => {
    res.render("error.ejs");
})