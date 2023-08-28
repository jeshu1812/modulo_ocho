const express = require('express');
require('dotenv').config();
const sequelize = require('./app/config/db_config');
//const User = require('./app/models/user.model.js');
//const Bootcamp = require('./app/models/bootcamp.model.js');
//const userController = require('./app/controllers/user.controller.js');
//const bootcampController = require('./app/controllers/bootcamp.controller.js');
const relations = require('./app/models/relations.js');
const userRoutes = require('./app/routes/user.routes.js');
const bootcampRoutes = require('./app/routes/bootcamp.routes')
const bootcampuserRoutes = require('./app/routes/bootcamp_user.routes')
const BootcampUser = require('./app/models/bootcamp_user.model');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(userRoutes);
app.use(bootcampRoutes);
app.use(bootcampuserRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();




sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


