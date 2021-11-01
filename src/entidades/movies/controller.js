const Pelicula = require ('./model.js')
//         res.json({
//             movie: peliculas
//         });
//     }
// };
// // module.exports.getMovie = (req, res) => res.json({
// //     movie: peliculas[req.params.id]
// // });
// 
module.exports.postMovie =  async (req, res) => {
    const pelicula = new Pelicula (req.body);
    await pelicula.save();
    res.json (pelicula);
    
    // res.json({
    //     movie: peliculas
    // });
};

// module.exports.putMovies = (req, res) => {
//     const palabra = (req.body.movie);
//     const posicion = peliculas.indexOf(palabra);
//     peliculas[posicion] = (req.body.new);
//     res.json({
//         newFilm: peliculas
//     });
// };

// module.exports.deleteMovie = (req, res) => {
//     const palabra = (req.body.movie);
//     const posicion = peliculas.indexOf(palabra);
//     peliculas.splice(posicion, 1)
//     res.json({
//         delete: peliculas
//     })
// };