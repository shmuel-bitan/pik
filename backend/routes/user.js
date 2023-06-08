const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit'); // package de prévention des forces brutes
const userCtrl = require('../controllers/user');
//mise en place d'une vérification de la validité de l'email
const emailValidator = require('../middleware/email-validation');

//mise en place d'une vérification de la complexité du password
const passwordValidator = require('../middleware/password-validation');

const passLimiter = rateLimit({
    windowMs: 2 * 60 * 1000, // Temps défini (en minutes) pour tester l'application
    max: 3 // essais max par adresse ip
  });

//routes POST pour créer un compte ou se connecter envoyé par le frontend
router.post('/signup', emailValidator, passwordValidator, userCtrl.signup);
router.post('/login',passLimiter, userCtrl.login);

//export du router
module.exports = router;