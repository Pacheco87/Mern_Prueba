const express = require('express');
const router = express.Router();
const PostgreController = require('../controllers/PostgreController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

router.post('/', 
    PostgreController.ConsultaDatos
);

module.exports = router;