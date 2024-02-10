const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', usersController.getAllUsers);

router.post('/',authMiddleware ,usersController.createUser);

module.exports = router;
