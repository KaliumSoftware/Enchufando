const { createUserContr } = require('../../../controllers');

const createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    userCreated = await createUserContr(
      name,
      email,
      password,
      address
    );
    if (!userCreated) {
      throw new Error('User not created');
    }
    return res.status(201).json(userCreated);
  } catch (error) {
    console.error('error in createUser: ' + error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = createUser;
