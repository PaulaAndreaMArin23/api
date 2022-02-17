const { Router } =require('express');

const router = Router();

const {findAll, findOne} = require('../controller/classification.controller');

router.get('/api/classifications', findAll);
router.get('/api/classifications/:codigo', findOne);

module.exports = router;