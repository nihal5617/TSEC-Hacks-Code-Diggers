const express = require('express');

const {addUser,loginUser,updateUser,deleteUser} = require('../contoller/contollers.js');

const router = express.Router();

router.route('/register/user').post(addUser).patch(updateUser).delete(deleteUser);
router.route('/login/user').get(loginUser);

module.exports = {
    router
}