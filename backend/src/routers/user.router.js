const { Router } =require('express');

const router = Router();

const { findAll, findOne, create, update, delet } = require('../controller/user.controller');


router.get('/api/user', findAll);
router.get('/api/user/:codigo', findOne);
router.post('/api/user' , create);
router.delete('/api/user/:codigo' , delet);
router.put('/api/user/:codigo' , update);

module.exports = router;