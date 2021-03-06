const router = require('express').Router();
const controller = require('./userController.js');

router.get('/users', controller.getUser);

router.get('/singleUser', controller.getSingleUser);

router.post('/users/login', controller.login);

router.post('/users', controller.createUser);

router.put('/users',controller.updateUser);

router.delete('/users/:id', controller.deleteUser);

module.exports = router;



//si quiero hacer un put tiene que ser solo para que algunos puedan modificar su perfil

