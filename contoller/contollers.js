import express from 'express';
import mongoose from 'mongoose';
import Model from '../model.js';
import router from '../routes/routes'

router.get('/', (req, res) => {
    res.render("employee/addupdate", {
        viewTitle: "Insert Employee"
    });
})

router.post('/register/user', (req, res) => {
    if (req.body._id == '')
        createUser(req, res);
    else
        updateRecord(req, res);
});

export const createUser = async (req, res) => {
    const { userName,pass,about,experience,domain,projects,followCount,linkedin,github,contests,resumeFile } = req.body;
    const newUser = new Model({ userName,pass,about,experience,domain,projects,followCount,linkedin,github,contests,resumeFile });
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}