const emailTemplate = require('./templates');

const { Resend } = require('resend');
const resend = new Resend('re_aZuWkNSF_Cqs53ZtAhbUmKWwPJoWSV4Qw');

(async function () {
  try {
    const data = await resend.emails.send({
      from: 'Enchufando <info.enchufando@resend.dev>',
      to: ['joshuanicolas74@gmail.com'],
      subject: 'Nuevos Productos!',
      html: emailTemplate
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
