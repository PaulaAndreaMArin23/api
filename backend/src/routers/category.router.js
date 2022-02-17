const { Router } =require('express');

const router = Router();

const {findAll, findOne} = require('../controller/category.controller');

router.get('/api/category', findAll);
router.get('/api/category/:codigo', findOne);

module.exports = router;