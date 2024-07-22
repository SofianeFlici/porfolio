const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/clients', authController.getAllclients);
router.get('/clients/:id', authController.getUserById);
router.put('/clients/:id', authController.updateUser);
router.delete('/clients/:id', authController.deleteUser);

module.exports = router;
