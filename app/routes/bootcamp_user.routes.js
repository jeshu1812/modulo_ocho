const express = require('express');
const router = express.Router();
//const User = require('./app/models/user.model.js');
//const Bootcamp = require('./app/models/bootcamp.model.js');
//const userController = require('./app/controllers/user.controller.js');
const bootcampController = require('../controllers/bootcamp.controller.js');
//const relations = require('./app/models/relations.js');

//otras
router.post('/api/bootcamp/adduser', bootcampController.addUserToBootcamp);
router.get('/api/bootcampUsers', bootcampController.getBootcampUsers);
router.get('/api/bootcamps/:bootcampId/users/:userId/check', bootcampController.checkUserInBootcamp);
router.delete('/api/bootcamps/:bootcampTitle/users/:userId', bootcampController.removeUserFromBootcamp);

module.exports = router