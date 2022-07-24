const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt',{encoding:'utf-8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

//first method for large files
// rs.on('data',(dataChunk)=>
// {
//     ws.write(dataChunk);
// })

//second method for large files

 rs.pipe(ws);