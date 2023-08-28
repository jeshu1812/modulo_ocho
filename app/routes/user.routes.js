const express = require('express');
const router = express.Router();
//const  verifySignUp  = require('../middleware/verifySingUp.js');
const User = require('../models/user.model.js')
const Bootcamp = require('../models/bootcamp.model.js');
const userController = require('../controllers/user.controller.js');
const bootcampController = require('../controllers/bootcamp.controller.js');
const relations = require('../models/relations.js');


//rutas usuarios
router.post('/api/user/signup', userController.createUser);
router.post('/api/signup', userController.signUp);
router.post('/api/signin', userController.signIn);
router.get('/api/users/:userId', userController.findUserById);
router.get('/api/users', userController.findAll);
router.put('/api/users/:userId', userController.updateUserById);
router.delete('/api/users/:userId', userController.deleteUserById);

module.exports = router