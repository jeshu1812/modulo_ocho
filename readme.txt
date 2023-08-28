https://github.com/jeshu1812/modulo_ocho.git
User:
[
  {
    "id": 1,
    "firstName": "Mateo",
    "lastName": "Diaz",
    "email": "mateo.diaz@correo.com",
    "password": "mateo123456",
    "createdAt": "2023-08-28T14:46:32.298Z",
    "updatedAt": "2023-08-28T14:46:32.298Z"
  },
  {
    "id": 2,
    "firstName": "Santiago",
    "lastName": "Mejias",
    "email": "santiago.mejias@correo.com",
    "password": "santiago123456",
    "createdAt": "2023-08-28T14:47:21.833Z",
    "updatedAt": "2023-08-28T14:47:21.833Z"
  },
  {
    "id": 3,
    "firstName": "Lucas",
    "lastName": "Rojas",
    "email": "lucas.rojas@correo.com",
    "password": "lucas123456",
    "createdAt": "2023-08-28T14:47:50.043Z",
    "updatedAt": "2023-08-28T14:47:50.043Z"
  },
  {
    "id": 4,
    "firstName": "Facundo",
    "lastName": "Fernandez",
    "email": "facundo.fernandez@correo.com",
    "password": "facundo123456",
    "createdAt": "2023-08-28T14:48:36.724Z",
    "updatedAt": "2023-08-28T14:48:36.724Z"
  },
  {
    "id": 5,
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": "$2b$10$dONpZsnJlC50UfesOxLYdeSOkOOW8JpblqCy9.LX0rLAnFhQ39OF.",
    "createdAt": "2023-08-28T16:55:02.072Z",
    "updatedAt": "2023-08-28T16:55:02.072Z"
  },
  {
    "id": 6,
    "firstName": "Maria",
    "lastName": "Diaz",
    "email": "maria.diaz@example.com",
    "password": "$2b$10$u9fOPXFqpjmt3Yzt.5xQ4egjuSBFr/T0b2jdUIluBR0/RaWh4izeK",
    "createdAt": "2023-08-28T17:26:15.912Z",
    "updatedAt": "2023-08-28T17:26:15.912Z"
  }
]

Bootcamp:
[
  {
    "id": 2,
    "title": "Bootcamp Desarrollo Web Full Stack",
    "cue": 12,
    "description": " Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS Angular, MongoDB, ExpressJS",
    "createdAt": "2023-08-28T14:56:08.973Z",
    "updatedAt": "2023-08-28T14:56:08.973Z",
    "Users": []
  },
  {
    "id": 4,
    "title": "Nuevo Curso",
    "cue": 20,
    "description": "Curso Nuevo para tomar ramos",
    "createdAt": "2023-08-28T17:47:43.839Z",
    "updatedAt": "2023-08-28T17:47:43.839Z",
    "Users": []
  },
  {
    "id": 1,
    "title": "Introduciendo El Bootcamp de React",
    "cue": 10,
    "description": " React es la librería más usada en JavaScript para el desarrollo de interfaces",
    "createdAt": "2023-08-28T14:55:38.038Z",
    "updatedAt": "2023-08-28T14:55:38.038Z",
    "Users": []
  },
  {
    "id": 3,
    "title": "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
    "cue": 18,
    "description": "Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e integrarlos con modelos avanzados de Artificial Intelligence y Machine Learning",
    "createdAt": "2023-08-28T14:56:40.750Z",
    "updatedAt": "2023-08-28T14:56:40.750Z",
    "Users": []
  }
]

 Listar el usuario con el id 3
GET http://localhost:3000/api/users/3
{
  "id": 3,
  "firstName": "Lucas",
  "lastName": "Rojas",
  "email": "lucas.rojas@correo.com",
  "password": "lucas123456",
  "createdAt": "2023-08-28T14:47:50.043Z",
  "updatedAt": "2023-08-28T14:47:50.043Z"
}


● Actualizar el usuario según su id, por ejemplo actualizar el usuario con id=1 por Pedro Sánchez
PUT http://localhost:3000/api/users/1
{
  "id": 1,
  "firstName": "Pedro",
  "lastName": "Sanchez",
  "email": "mateo.diaz@correo.com",
  "password": "mateo123456",
  "createdAt": "2023-08-28T14:46:32.298Z",
  "updatedAt": "2023-08-28T17:55:44.510Z"
}

● Eliminar un usuario por id, por ejemplo el usuario con id=1
DELETE http://localhost:3000/api/users/1
Executing (default): DELETE FROM "Users" WHERE "id" = 1

● Consultando el bootcamp por id, incluyendo los usuarios registrados

● Listar todos los bootcamp con sus usuarios

● Consultar un usuario por id incluyendo los bootcamp

● Gestione adecuadamente el manejo de errores
