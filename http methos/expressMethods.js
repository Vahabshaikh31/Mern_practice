const express = require("express");
const htpp = require("http");
const app = express();

app.get('/' , (req , res)=>{
    return res.send("Hello this is home page "+ req.query.name)
    })
app.get('/about' , (req , res)=>{
    return res.send("Hello this is about page " )
    })


const myServer = htpp.createServer(app);

myServer.listen(8000 , ()=> console.log("server stated"));


