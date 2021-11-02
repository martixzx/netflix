### Features

Proyecto del bootcamp.
En este proyecto se nos pide crear un backend de buscador de peliculas.
En este buscador debes tener un usuario y contraseña validos.
Tambien debes poder crear modificar y eliminar peliculas.

# Tecnologias

- JavaScript
- express
- node


#### Partes del codigo

router.get('/users', controller.getUser);

router.get('/singleUser', controller.getSingleUser);

router.post('/users/login', controller.login);

router.post('/users', controller.createUser);

router.put('/users',controller.updateUser);

router.delete('/users/:id', controller.deleteUser);


