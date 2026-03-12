require('dotenv').config()
const express = require("express");
const dbConnection = require('./config/bdConnection');
const app = express();


app.use(express.json());
// Database connection
dbConnection()




app.get('/', (req, res)=>{
    res.send("hello world");
});
let port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server Is Running  ${port}`);
})