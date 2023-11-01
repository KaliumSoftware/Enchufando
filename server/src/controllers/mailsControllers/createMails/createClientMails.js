const { mailSender } = require('../../../utils/nodemailer');
const { User } = require('../../../db');

const createClientMails = async () => {
  try {
    const allUsers = await User.findAll();
    if (allUsers.length === 0) {
      throw new Error('No hay usuarios');
    }
    const allUsersEmails = allUsers.map((user) => user.email);
    for (let i = 0; i < allUsersEmails.length; i++) {
      newProductMail(allUsersEmails[i]);
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};
module.exports = createClientMails;
