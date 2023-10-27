const express = require('express')
const app = express()
const port = 4000
const path = require('path');

// for body parsing
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// returns welcome message to the base url for our server
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

// returns "Hello " with the selected name you've slotted into the url
app.get('/hello/:name', (req,res) =>{
    console.log(req.params.name);
    res.send("Hello "+ req.params.name);
})

// returns book json data
app.get('/api/books', (req,res) =>{
    const data = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },
    {
    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    "isbn": "1617292036",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
    "status": "MEAP",
    "authors": ["Simon Holmes"],
    "categories": []
    }
    ];

    // sends back json data
    res.status(200).json({
        myBooks:data, 
        "message": "Hello from server, these are your books"
    });
})

// returns the indicated file, in this case index.html
app.get('/test', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
})

// after submission on index form, return "Hello " with our submitted names
app.get('/name', (req,res) => {
    res.send("Hello "+req.query.fname + " " + req.query.lname);
})

// returns a secure output using post and body parser
app.post('/name', (req,res) =>{
    res.send("Hello " +req.body.fname + " " + req.body.lname);
})

// Listens in on the selected port (4000 for us)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})