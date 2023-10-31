const { User } = require('../db');

module.exports = function authAdminMiddleware(handler) {
  return async (req, res) => {
    const userId = req.query.userId || 'notLogged';

    if (userId === 'notLogged') {
      return res.status(401).json({ error: 'Acceso no autorizado' });
    }

    const user = await User.findOne({ where: { id: userId } });

    if (user.isAdmin) {
      return handler(req, res);
    } else {
      res.status(403).json({ error: 'Acceso no autorizado' });
    }
  };
};
