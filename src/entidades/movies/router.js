const router = require('express').Router();

const controller = require('./controller.js');

router.get('/:id', controller.getMovie);
router.get('/', controller.getMovie);
router.post('/', controller.postMovie);
router.put('/', controller.putMovie);
router.delete('/', controller.deleteMovie);

module.exports = router