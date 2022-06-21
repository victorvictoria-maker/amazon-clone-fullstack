// importing the dependencies

// for http methods (get, post, update, delete)
const express = require('express');
// blocks the http requests
const morgan = require('morgan');
//extracts data and passes it in the required/required format
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user.js');

dotenv.config();

const app = express();

// connecting the server to MongoDB Atlas
mongoose.connect(process.env.DATABASE, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

// MIDDLEWARES so backend has the ability to pass data to the front-end and vice-versa
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// creating our two APIS
// first is get method which retrieves data from the server
// app.get("/", (req, res) => {
//     res.json('Hello Amazon Clone');
// });


// post method sends data from the front-end in order to save in the server
// app.post("/", (req, res) => {
//     let user = new User();

//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.password = req.body.password;

    // saving the user object into the database
    // user.save((err) => {
    //     if(err) {
    //         res.json(err);
    //         console.log("error");
    //     } else {
    //         res.json("Successfully saved");
    //         console.log('Successfully saved');
    //     }
    // });
// });

// require APIS
const productRoutes = require('./routes/product');
app.use('/api', productRoutes);

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on PORT', 3000);
    }
});