const { User, Codes } = require('../../../db');

const createUserContr = async (
  name,
  email,
  password,
  address,
  code
) => {
  try {
    const codeExists = await Codes.findOne({
      where: {
        code
      }
    });

    if (!codeExists) throw new Error('El código no existe');

    if (codeExists.isUsed) throw new Error('El código ya fue usado');

    const discount = codeExists.discount;

    const userCreated = await User.create({
      name,
      email,
      password,
      address,
      discount
    });

    if (!userCreated) return false;

    await Codes.update({ isUsed: true }, { where: { code } });

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
