const express = require('express');
const morgan = require('morgan');

// Express app
const app = express();

app.set('view engine','ejs');

// Listen for request
app.listen(3000);

// Middleware
// app.use((req,res,next) => {
//     console.log("New Request made:");
//     console.log('Host :', req.hostname);
//     console.log('Path :', req.path);
//     console.log('Method :', req.method);
//     next();
// });

// app.use((req,res,next) => {
//     console.log("In the next middleware");
//     next();
// });


// Morgan(third party middleware)
app.use(morgan('dev'));

// Middleware and static(images and style files to make it visible on client side)
app.use(express.static('public'));

app.get('/',(req,res) => {
   const blogs = [
    {title: 'Yoshi find eggs' , snippet : 'Lorem ipsum dolor sit amet'},
    {title: 'Mario find stars', snippet : 'Lorem ipsum dolor'},
    {title: 'How to defeat browser', snippet : 'Lorem ipsum dolor'},
   ];
    res.render('index',{title: 'HOME', blogs})
    // res.send('<p>Home page<p>')
    // res.sendFile('./views/index.html',{root : __dirname});
})

app.get('/about',(req,res) => {
    // res.send('<p>About page<p>')
    // res.sendFile('./views/about.html',{root : __dirname});
    res.render('about',{title: 'ABOUT'})
})

app.get('/about-us',(req,res) => {
    res.redirect('./about');
})
app.get('/blogs/create',(req,res) => {
    res.render('create',{title: 'CREATE'});
})

// 404
app.use((req,res) => {
    // res.status(404).sendFile('./views/404.html',{root : __dirname});
    res.status(404).render('404',{title: 'ERROR'})
})