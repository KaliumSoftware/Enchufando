const { User } = require('../../../db');
const mailSender = require('../../../utils/nodemailer');

const { newProducts } = require('../../../utils/templates');

const createClientMails = async (firstName) => {
  try {
    const mailOptions = {
      from: `ENCHUFANDO ${process.env.EMAIL}`,
      to: process.env.EMAIL,
      subject: `Bienvenido ${firstName}`,
      html: newProducts
    };

    const response = await mailSender(mailOptions);

    const allUsers = await User.findAll();
    if (allUsers.length === 0) {
      throw new Error('No hay usuarios');
    }

    /*
    const allUsersEmails = allUsers.map((user) => user.email);
    for (let i = 0; i < allUsersEmails.length; i++) {
      mailOptions = {
        from: `ENCHUFANDO ${process.env.EMAIL}`,
        to: 'joshuacandia74@gmail.com',
        subject: `Bienvenido ${firstName}`,
        html: newProducts
      };
    } 
    */
  } catch (error) {
    console.error(error);
    return error;
  }
};
module.exports = createClientMails;
