// routes/profile.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.viewProfile);
router.post('/update', profileController.updateProfile);
// ... otras rutas relacionadas con el perfil

module.exports = router;
