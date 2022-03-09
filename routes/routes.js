const express = require('express');

const {createUser} = require('../controller/controllers.js');

const router = express.Router();

// router.route('/SignUp').post(addUser).patch(updateUser).delete(deleteUser);
// router.route('/SignUp').post(createUser);

module.exports = {
    router
}