const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

    // Lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello')
    });

    greet();


    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello and Welcome for learning Node</h1>');
    // res.write('<p1>Hello again</p1>');

    let path = './views/';

    switch (req.url) {
        case '/':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/About':
            path+='about.html';
            res.statusCode = 200;
            break;
        case '/About-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
        }
        else{
            // res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000,'localhost',() => {
    console.log('Listening for server')
})