// Client side
const https = require ('node:https')
//it is for read to certificate
const fs = require('fs')


const options = {
    hostname:'localhost',
    port:3000,
    path:'/',
    key: fs.readFileSync('./client.key'),
    cert: fs.readFileSync('./client.crt'),
    ca:[
            fs.readFileSync('./server.crt'),
    ],
    rejectUnauthorized:false,
    passphrase:'1722'
}

const req = https.request(options,(res)=>{
    console.log('statusCode:',res.statusCode);
    console.log("headers:",res.headers);

    res.on("data",(d)=>{
        process.stdout.write(d);
    });
});

req.on("error",(e)=>{
    console.log(e);
});
req.end();