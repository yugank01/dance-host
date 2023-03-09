const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded())


// THIS IS USED FOR PUG FILES INCLUSION IN EXPRESS
// app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

// app.get('/', (req, res)=>{
//     // const con = "This is the best Dance Academy to broaden up your skills."
//     // const params = {'title': 'Dance Academy', 'content': con}
//     res.status(200).render('index.pug')
// })

// THIS IS USED FOR HTML FILES INCLUSION IN EXPRESS
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/index.html'));
    // res.sendFile(path.join(__dirname, '/views/index.html'));
  });

app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});