const { createUserContr } = require('../../../controllers');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    //Password hashing
    const hashedPass = await bcrypt.hash(password, 10);

    userCreated = await createUserContr(
      name,
      email,
      hashedPass,
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

/* Compare password
bcrypt.compare(password, 10);
*/
