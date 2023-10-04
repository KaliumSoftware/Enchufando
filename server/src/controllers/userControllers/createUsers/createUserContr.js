const { User } = require('../../../db');

const createUserContr = async (name, email, password, address) => {
  try {
    const userCreated = await User.create({
      name,
      email,
      password,
      address
    });
    console.log(userCreated);
    if (!userCreated) {
      return false;
    }
    return userCreated;
  } catch (error) {
    console.error('error in createUserContr: ' + error);
    return false;
  }
};

module.exports = createUserContr;
