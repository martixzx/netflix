const express = require('express');
const mongoose = require('mongoose');

const moviesRouter = require('./src/entidades/movies/router.js')
// const userRouter = require('./src/entidades/user/userRouter.js')

mongoose.connect('mongodb://localhost:27017/alcachofa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('conectado a la base de datos WIII '))
.catch(e => console.error('no estoy conectado', e));

const app = express();
app.use(express.json());
app.use('/movies', moviesRouter);

app.listen(4101, () => console.log("aqui esta nuestro blacknetflix en el puerto 4101"));
 

























// const token = jwt.sign({ userId: userRouter._id, role: user.role }, 'patata');

// let jwt = require('jsonwebtoken');

// const token = jwt.sign({ userId: 'ascensor' }, 'patata');

// console.log(token)

// let decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJhc2NlbnNvciIsImlhdCI6MTYzNTQ5ODY0NX0.R0_FUjNGNuh3sJe5zAhWoXjhiBOtj1KZRJWNAc-Yvy0", 'patata');
// console.log(decoded)




