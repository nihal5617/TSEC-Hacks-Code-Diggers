// import express from 'express';
// import mongoose from 'mongoose';
const Model = require('../model.js');
const { router } = require('../routes/routes');

console.log(router);

router.route('/').get((req, res) => {
    res.render('index-vraj', {
        viewTitle: "Insert Employee"
    });
})

router.post('/SignUp', (req, res) => {


    console.log(res.body);
    if (req.body._id == '')
        createUser(req, res);
    else
        updateRecord(req, res);
});

router.route('/SignUp-2').post((req, res) => {
    console.log(req.body);
    // if (req.body._id == '')
    //     createUser(req, res);
    // else
    //     updateRecord(req, res);
});

const createUser = async (req, res) => {
    const { userName,pass,about,experience,domain,projects,followCount,linkedin,github,contests,resumeFile } = req.body;
    const newUser = new Model({ userName,pass,about,experience,domain,projects,followCount,linkedin,github,contests,resumeFile });
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