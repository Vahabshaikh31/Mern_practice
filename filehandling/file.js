const fs = require("fs");

const file = fs.writeFileSync("bio.txt", "name abudlvahsb ahdikh  ");

fs.appendFile("bio.txt", "age:20 hight =6'7", (err) => {
  console.log("dsbsh h");
});

// fs.rename('bio.txt' , 'Mybio.txt' , (err)=>

//     {})

// fs.mkdir('tahapa' ,(err)=>{
//     console.log("file is creted");
// })

// fs.rm("tahapa", (err) => {
//   console.log("folder deleted");
// });

// fs.unlink("bio.txt", (err) => {})

    fs.rmdir('./myfolder', (err) => {};matchMedia;)