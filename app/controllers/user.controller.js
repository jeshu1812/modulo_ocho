const User = require('../models/user.model.js');
//const userRoutes = require('../routes/user.routes.js');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');


const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Verificar que se proporcionen los datos necesarios
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    const user = await User.create({ firstName, lastName, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const findUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      await user.update({ firstName, lastName, email });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      await user.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: 'Todos los datos son requeridos, email y password' });
    }

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await sign(
        {
          userId: user.id,
          email
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: '5m',
        }
      );

      console.log(`Usuario: ${email}\nToken: ${token}`);

      return res.status(200).json({
        token,
        message: 'Autenticado'
      });
    }

    return res.status(401).json({ message: 'Credenciales inválidas' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};


const signUp = async (req, res) => {
  try {
    // obteniendo los valores de entrada
    const { firstName, lastName, email, password } = req.body;

    //Generamos aleatoriamente el salt
    const salt = await bcrypt.genSalt(10);
    console.log("Salt generado: " + salt);
    // Encriptando la contraseña del usuario
    const encryptedPassword = await bcrypt.hash(password, salt);

    // Password encriptado
    console.log("\nPassword encriptado: " + encryptedPassword);

    // Creando el usuario en la bases de datos
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // Convertimos a minúscula
      password: encryptedPassword,
    });

    // Creación del Token
    const token = await sign(
      {
        userId: user.id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2m",
      }
    );
    // Token Generado
    console.log("\nToken Generado: " + token);

    // retornamos el nuevo usuario
    res.status(201).json({
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
  signIn,
  signUp
};
