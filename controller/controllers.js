// import express from 'express';
// import mongoose from 'mongoose';
const Model = require('../model.js');
const { router } = require('../routes/routes');
const notes = require('../data.js');

// console.log(router);
var signup1, signup2;

router.route('/').get((req, res) => {
    res.render('Home', {
        viewTitle: "Insert Employee"
    });
})

router.post('/Signup', (req, res) => {


    console.log(req.body);
    signup1 = req.body;
    // if (req.body._id == '')
    //     createUser(req, res);
    // else
    //     updateRecord(req, res);
});

router.route('/SignUp-2').post((req, res) => {
    console.log(req.body);
    // signup2 = req.body;

    // if (req.body._id == '')
        // createUser(req, res);
    // else
    //     updateRecord(req, res);
    res.send('NIHAL');
    // res.status('500').send();
});

// var data = {
//     signup1,
//     signup2
// }

// console.log(data);

router.route('/login').post((req, res) => {
    console.log(req.body);
    
    // if (req.body._id == '')
        // createUser(req, res);
    // else
    //     updateRecord(req, res);
    res.send('NIHAL');
});

// router.route('/login').get((req,res) => {
//     console.log(res.body);
//     const datas = notes.loadNotes();
//     console.log(data);
    
// })

router.route('/').post((req, res) => {
    console.log(req.body);
    // const data = loadNotes();
    // console.log(data);
    // datas.forEach(data => {
    //     if(data.email == res.body.email && data.pass == res.body.pass) {
    //         console.log(hello);
    //     }
    // })

    // if (req.body._id == '')
        // createUser(req, res);
    // else
    //     updateRecord(req, res);
    res.send('NIHAL');
});

const createUser = async (req, res) => {
    const { userName,pass,about,experience,domain,projects,followCount,linkedin,github,contests,resumeFile } = req.body;
    // const newUser = new Model({ userName,pass,about,experience,domain,projects,followCount,linkedin,github,contests,resumeFile });
    const newUser = new Model(req.body);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    router
}