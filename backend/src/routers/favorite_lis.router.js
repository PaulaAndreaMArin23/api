const { Router } =require('express');

const router = Router();

const { findAll, findOne, create, update, delet } = require('../controller/favorite_list.controller');


router.get('/api/favorite_lists', findAll);
router.get('/api/favorite_lists/:codigo', findOne);
router.post('/api/favorite_lists' , create);
router.delete('/api/favorites_list/:codigo' , delet);
router.put('/api/favorites_list/:codigo' , update);

module.exports = router;