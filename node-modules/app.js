

const express = require("express");
const app = express();

app.get('/products', (req, res) => {
    res.json("Hello")});

app.get('/contact', (req, res) => {
    res.json("contact")});
    
app.get('/about', (req, res) => {
    res.json("about")});

    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
    
    // app.get("/", (req, res) => {
    //     res.send("Hello World");
    // });







