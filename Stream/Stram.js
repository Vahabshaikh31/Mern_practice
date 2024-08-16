const fs  = require('fs');
const http  = require('http');




const server = http.createServer( );

server.on('request' , (req , res)=>{

    fs.readFile('input.txt', (err, data)=>{
      if (err) return console.error(err);
      res.end(data.toString());
    });

    const rsStrem = fs.createReadStream('./input.txt' , 'utf-8');

    rsStrem.on('data' , (chunkdata)=>{
        console.log(chunkdata);
        res.write(chunkdata);
    });

    rsStrem.on('end' , ()=>{
        res.end();
    });
    rsStrem.on('error' , (err)=>{
        console.log(err);
        res.end('file not found')
    })
})

server.listen(8000);