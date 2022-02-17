const { Router } =require('express');

const router = Router();

const { findAll, findOne, create, update, delet } = require('../controller/film.controller');


router.get('/api/film', findAll);
router.get('/api/film/:codigo', findOne);
router.post('/api/film' , create);
router.delete('/api/film/:codigo' , delet);
router.put('/api/film/:codigo' , update);

module.exports = router;