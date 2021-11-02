const Pelicula = require ('./model.js')



module.exports.postMovie =  async (req, res) => {
    const pelicula = new Pelicula (req.body);
    await pelicula.save();
    res.json (pelicula);
    
};


module.exports.putMovie =  async (req, res) => {
    const pelicula = push.Pelicula (req.body);
    await pelicula.save();
    res.json (pelicula);
    
};

module.exports.unapelicula = async (req, res) => {
    const user = await User.findOne(req.body.tittle);
    console.log(pelicula);
    res.json (pelicula);
};

module.exports.actualiza = async (req, res) => {
    const pelicula = await pelicula.findById(req.body.id);
    pelicula.tittle = req.body.tittle;
    await pelicula.save();
    res.json(pelicula);

};

module.exports.createMovie = async (req, res) => {
    const pelicula = new pelicula(req.body);
    await pelicula.save();
    res.json(pelicula);
};

module.exports.deleteMovie = async (req, res) => {
    const { id } = req.params;
    const pelicula = await User.findById(id);
    await pelicula.deleteOne(pelicula);
    res.json('pelicula eliminada');
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