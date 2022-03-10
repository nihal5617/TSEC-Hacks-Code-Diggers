// Importing modules
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const mongoose = require('mongoose');
const { router } = require('./controller/controllers.js')

const app = express();

app.use(express.json());
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
app.use('/', router);

// For index.hbs
app.get('', (req, res) => {   // Making it Dynamic
    res.render('Home', {
        title: 'Weather',  
        name: 'Nihal Gupta'
    });
});

// For SignUp.hbs
app.get('/SignUp', (req, res) => {   // Making it Dynamic
    res.render('Signup', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

// Extra details
app.get('/SignUp-2', (req, res) => {   // Making it Dynamic
    res.render('SignUp-2', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

// For LogIn.hbs
app.get('/Login', (req, res) => {   // Making it Dynamic
    res.render('Login', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

// For Profile.hbs
app.get('/profile', (req, res) => {   // Making it Dynamic
    res.render('Profile', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

// after Login
app.get('/home', (req, res) => {   // Making it Dynamic
    res.render('HomeAfter', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

app.get('/network', (req, res) => {   // Making it Dynamic
    res.render('Networks', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

app.get('/cb', (req, res) => {   // Making it Dynamic
    res.render('Chatbox', {
        title: 'Weather',
        name: 'Nihal Gupta'
    });
});

app.get('/*', (req, res) => {   // Making it Dynamic
    res.render('Error', {
        Message: 'Oops! There was some error',
    });
});
// app.listen(5000, () => {
//     console.log('Server is up on port 5000');
// })

const CONNECTION_URL = 'mongodb+srv://vraj:vraj123@cluster0.kbqn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));



const data = [{
    email: "nihal@gmail.com",
    fName: "Nihal",
    lName: "Gupta",
    pass: "nihal",
    about: "Known with coding languages like C++,Python,Html Scored 191 in CS in which C++ and html was there as coding languages and Microprocessor and microcontroller in hardware Got overall 88.46% in 12th with 100/100 in maths Got 97.27 percentile in CET",
    experience: 1,
    domain: ["AppDev", "WebDev"],
    projects: ["StroyTeller", "ABC", "FarmGrow"],
    followCount: 120,
    linkedin: "nihal123",
    github: "nihal123",
    contests: ["Code-Odyssey", "TSEC-Hacks", "LOC 3.0"],
}, {
    email: "rujuta@gmail.cpm",
    fName: "Rujuta",
    lName: "Joshi",
    pass: "rujuta",
    about: "Currently learning Python , advancing web dev and also will be a full stack developer at the end of this month. Made some projects on AppDev and web dev so visit my github profile.",
    experience: 2,
    domain: ["AppDev", "WebDev"],
    projects: ["Calculator", "UI-Maker", "NotesApp"],
    followCount: 110,
    linkedin: "rujuta123",
    github: "rujuta123",
    contests: ["LOC 3.0", "TSEC-Hacks"],
}, , {
    email: "vraj@gmail.com",
    fName: "Vraj",
    lName: "Desai",
    pass: "vraj",
    about: "I am currently in my 2nd year I.T and having a first time experience of hackathon. My skill is fronted web development and excited to kick start with it.",
    experience: 1,
    domain: ["AppDev", "WebDev"],
    projects: ["Calculator", "UI-Maker", "NotesApp"],
    followCount: 140,
    linkedin: "vrajdomgy",
    github: "vrajdomgy",
    contests: ["Tsec-Hacks"],
}, {
    email: "ronnit",
    fName: "Ronnit",
    lName: "Mirgh",
    pass: "ronnit",
    about: "Hi, I am Ronnit Mirgh, a student at IT branch of Dwarkadas Jivanlal Sanghvi college of Engineering. I m good at competitive programming. I take part in various contests on codechef and love to solve them and earn ranking. I know C, C++ and JAVA language. I also have knowledge about web development including both frontend and backend. I do web development using Javascript and NodeJs. I have even made many projects which you can check it out on my GitHub account: https://github.com/Ronnit3012",
    experience: 2,
    domain: ["AI-ML", "AppDev", "WebDev"],
    projects: ["Calculator", "UI-Maker", "NotesApp"],
    followCount: 140,
    linkedin: "ronnit123",
    github: "ronnit123",
    contests: ["Code-Odyssey", "TSEC-Hacks", "LOC 3.0"],
}
]
