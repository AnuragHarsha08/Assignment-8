const express = require('express');
const adminController = require('../controller/adminController');
const route = express.Router();
const checkAuth = require('../middleware/check-auth');

route.post('/signup', adminController.adminSignup);
route.post('/login' , adminController.adminLogin);
route.post('/resetPassword' , adminController.resetPassword);
route.put("/forgotPassword", adminController.forgetPassword);
route.use(checkAuth);

route.delete('/deleteUser', adminController.deleteUser);


module.exports = route;