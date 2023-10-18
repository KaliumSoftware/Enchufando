const { createUserContr } = require('../../../controllers');

const createUser = async (req, res) => {
  try {
    const { name, email, password, address, code } = req.body;

    const pass = password;

    userCreated = await createUserContr(
      name,
      email,
      password,
      address,
      code,
      pass
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
