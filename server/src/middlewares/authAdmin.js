const { User } = require('../db');

module.exports = function authAdmin(handler) {
  return async (req, res) => {
    const userId = 'notLogged';

    if (req.body.userId !== undefined) userId = req.body.userId;
    else if (req.query.userId !== undefined) userId = req.query.userId;

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
