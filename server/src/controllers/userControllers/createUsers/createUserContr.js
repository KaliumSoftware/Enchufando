const { User, Codes } = require('../../../db');
const bcrypt = require('bcrypt');
const createUserContr = async (name, email, pass, address, code) => {
  try {
    //Password hashing
    const password = await bcrypt.hash(pass, 10);

    const codeExists = await Codes.findOne({
      where: {
        code
      }
    });

    if (!codeExists) throw new Error('El código no existe');

    const discount = codeExists.discount;

    const userCreated = await User.create({
      name,
      email,
      password,
      address,
      discount
    });

    if (!userCreated) return false;

    await Codes.destroy({
      where: {
        code
      }
    });

    const user = {
      id: userCreated.id,
      isActive: userCreated.isActive,
      name: userCreated.name,
      email: userCreated.email,
      address: userCreated.address,
      discount: userCreated.discount
    };

    return user;
  } catch (error) {
    console.error('error in createUser: ' + error);
    return error;
  }
};

module.exports = createUserContr;
