const emailValidator = require('email-validator');

//mise en place d'un contrôle de la validité de l'email

module.exports = (req, res, next) => {
  try {
    if (!emailValidator.validate(req.body.email)) {
      throw 'mail non valable!';
    } else {
      next();
    }

  } catch(error) {
    res.status(400).json({ error: 'mail non valable!' });
  }};