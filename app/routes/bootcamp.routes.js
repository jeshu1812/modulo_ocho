const express = require('express');
const router = express.Router();

//const User = require('./app/models/user.model.js');
//const Bootcamp = require('./app/models/bootcamp.model.js');
//const userController = require('./app/controllers/user.controller.js');
const bootcampController = require('../controllers/bootcamp.controller.js');
//const relations = require('./app/models/relations.js');


//rutas bootcamps
router.post('/api/bootcamp', bootcampController.createBootcamp);
router.post('/api/bootcamps/adduser', bootcampController.addUserToBootcamps);
router.get('/api/bootcamp/:bootcampId', bootcampController.findById);
router.get('/api/bootcamp', bootcampController.findAllBootcamps);

module.exports = router