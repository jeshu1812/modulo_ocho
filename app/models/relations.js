const User = require('./user.model.js');
const Bootcamp = require('./bootcamp.model.js');
const BootcampUser = require('./bootcamp_user.model.js');

// Relaciones
User.belongsToMany(Bootcamp, { through: BootcampUser });
Bootcamp.belongsToMany(User, { through: BootcampUser });
