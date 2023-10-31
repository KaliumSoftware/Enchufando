const { User } = require('../db');

module.exports = function isLogged(handler) {
  return async (req, res) => {
    try {
      const userId = req.query.userId || 'notLogged';

      if (userId === 'notLogged') {
        return res
          .status(401)
          .json({ error: 'Acceso no autorizado' });
      }

      return handler(req, res);
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'No se pudo autenticar' });
    }
  };
};
