const { Resend } = require('resend');
const resend = new Resend('re_aZuWkNSF_Cqs53ZtAhbUmKWwPJoWSV4Qw');

(async function () {
  try {
    const data = await resend.emails.send({
      from: 'Acme <info.enchufando@resend.dev>',
      to: ['joshuanicolas74@gmail.com'],
      subject: 'Hola!',
      html: '<strong>Funciona!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
