const router = require('express').Router();

const controller = require('./controller.js');

router.get('/:id', controller.postMovie);
router.get('/singleMovie', controller.unapelicula);
router.post('/actualiza', controller.actualiza);
router.put('/crear', controller.createMovie);
router.delete('/eliminar/:id', controller.deleteMovie);

module.exports = router