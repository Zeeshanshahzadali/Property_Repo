// const config = require("config");
const express = require("express");
const app = express();
app.use(express.json());
require('./src/db');
const routs = require("./src/routs/routs");

// mention the routs 
app.use('/api/property', routs);
app.use('/api/user', routs);

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send(`Done to Done`);
})
app.listen(port, () => {
    console.log(`Done to Done ${port}`);
})