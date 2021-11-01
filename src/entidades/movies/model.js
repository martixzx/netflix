const mongoose = require('mongoose');


const pelicula = mongoose.Schema({
    tittle: {
        type: String
    },
    years: {
        type: Number
    },
    
});

module.exports = mongoose.model('Pelicula', pelicula);