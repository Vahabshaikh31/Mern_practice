const htpp = require("http");
const fs = require("fs");
const url = require("url");

const myServer = htpp.createServer((req , res)=>{
  if(req.url === '/favicon.ico') return res.end();
const log = `${Date.now()} ${req.url}: New req on this time \n `;
const myUrl = url.parse(req.url , true);
console.log(myUrl);

fs.appendFile("data.txt" , log , (err , data)=>{
    switch(myUrl.pathname){
        case '/' : res.end("Home page");
        break;
        case '/about' : 
        const qp1 = myUrl.query.myname;  
        res.end(`Hiii, ${qp1}`)
        break;
        case '/Search' : 
        const Search = myUrl.query.searc_query;  
        res.end(`Here is the result for ${Search}`)
        break;
        default : res.end("404 : server Not found")
        break;
    }
});
});

myServer.listen(8002 , ()=> console.log("server stated"));