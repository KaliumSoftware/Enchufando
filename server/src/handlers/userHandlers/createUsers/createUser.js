const { createUserContr } = require('../../../controllers');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { name, email, password, address, code } = req.body;

    //Password hashing
    const hashedPass = await bcrypt.hash(password, 10);

    userCreated = await createUserContr(
      name,
      email,
      hashedPass,
      address,
      code
    );
    if (userCreated.message) {
      throw new Error(userCreated.message);
    }
    return res.status(201).json({
      message: 'Usuario creado con éxito',
      user: userCreated
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = createUser;
