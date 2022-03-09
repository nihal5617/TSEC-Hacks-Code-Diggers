// Importing modules
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const mongoose= require('mongoose');
// const {router} = require('./routes/routes')

const app = express();

// Define paths for Express Configuration
const publicDirectoryPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, './templates/views'); // we change the views directory
const partialsPath = path.join(__dirname, './templates/partials'); // we create a directory for the partials folder

// // Setup Handlebars Engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);   // we set up another setting for express, we changed the directory of the views folder to templates
hbs.registerPartials(partialsPath);   // this hbs.registerPartials take the path as an argument where the .hbs partials files will be there

// // Setup Static Directory to serve
app.use(express.static(publicDirectoryPath));  // this becomes our main directory on our local host
// app.use('/',router);

// For index.hbs
app.get('', (req, res) => {   // Making it Dynamic
    res.render('index-ronnit', {
        title: 'Weather',  
        name: 'Ronnit Mirgh'
    });
});


const CONNECTION_URL = 'mongodb+srv://vraj:vraj123@cluster0.kbqn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));
