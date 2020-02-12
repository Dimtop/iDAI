const express  = require('express');
const path = require('path');
const authorizeAndExecute = require('./Middlewares/listLessons.js');
const CORS = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname,"../Client/dist")));
app.use(CORS());

//app.get("*", (req,res)=>{
//    res.sendFile("index.html", {root: path.join(__dirname,"../Client/dist")});
//});


app.get("/api/lessons", authorizeAndExecute);

app.listen(PORT, (err)=>{
    console.log(path.join(__dirname,"../Client/Dist"));
    if(err){
        console.log(err);
    }
    else{
        console.log("Running on " + PORT);
    }
});