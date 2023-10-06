const { User } = require('./../../../db');
const bcrypt = require('bcrypt');

const compareUser = async (email, password) => {
  try {
    const userByEmail = await User.findOne({ where: { email } });

    if (!userByEmail) {
      return { access: false, message: 'email' };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      userByEmail.password
    );

    if (!passwordMatch) {
      return { access: false, message: 'password' };
    }

    return { access: true, message: 'Welcome' };
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = compareUser;
