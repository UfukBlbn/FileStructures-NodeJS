const fs = require('fs');


//Create file
if(!fs.existsSync('./new'))
{
    fs.mkdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory created')
    })
}

//Remove file
if(fs.existsSync('./new'))
{
    fs.rmdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory removed')
    })
}