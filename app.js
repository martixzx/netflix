const movies = ['SoyLeyenda', 'ReyLeon', 'La marca del demonio', 'A todo pedo', 'El risas', 'El brujo', 'Rey de la montaña', 'Soy el rey del mundo']
const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/alcachofa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

    .then(() => console.log('conectado a la base de datos WIII '))
    .catch(r => console.error('no estoy conectado', e))

const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require('./src/entidades/user/router')

const moviesRouter = require('./src/entidades/movies/router')
app.use(moviesRouter)

// //busqueda por nombre de pelicula
//     app.get('/movies/name/:nomb', (req, res) =>{
//         //res.json ({data: movies.indexOf(req.params.nomb)})
//         let posicionEncontrada = movies.indexOf(req.params.nomb)
//         res.json ({data: movies[posicionEncontrada]}) 
//     })

// // listado de peliculas
//     app.get('/movies',(req, res)=> {
//         res.json ({data: movies})
//     })

// // seleccionar pelicula
//     app.get('/movies/:id', (req, res) => {
//         res.json({data: movies[req.params.id]})
//     });

// // crear una pelicula insertada en el body
//     app.post('/movies', (req,res) => {
//         movies.push(req.body.agregar) 
//         res.json({data: movies}) // + movies[req.body]

// });

// // elimina una pelicula
//     app.delete('/movies', (req,res) => {
//         // movies.(req.body.eliminar)
//         movies.splice(req.params.eliminar, 1)
//         res.json({data: movies})

//     })











































// const token = jwt.sign({ userId: userRouter._id, role: user.role }, 'patata');

let jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 'ascensor' }, 'patata');

console.log(token)

let decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJhc2NlbnNvciIsImlhdCI6MTYzNTQ5ODY0NX0.R0_FUjNGNuh3sJe5zAhWoXjhiBOtj1KZRJWNAc-Yvy0", 'patata');
console.log(decoded)











































// res.json({data.movies})

// app.get('/laspelis',(req, res)=> res.send('abogado'));


//     function busqueda (mipeli) {
//         for (let index = 0; index < mipeli.length; index++) {
//             const element = movies[index];

//             }
//         }

//     busqueda(movies)

//     function detalle (mipeli) {
//         if (mipeli == "Soy leyenda") {

//         }
//         else if (mipeli == "Rey León") {

//         }
//     }



app.listen(4101, () => console.log("aqui esta nuestro blacknetflix en el puerto 4101"));