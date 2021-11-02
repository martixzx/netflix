const mongoose = require('mongoose');


const pelicula = mongoose.Schema({
    tittle: {
        type: String
    },
    years: {
        type: Number
    },
    autor: {
        type: String
    }
    
});

module.exports = mongoose.model('Pelicula', pelicula);