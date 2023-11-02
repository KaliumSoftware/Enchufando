const { createClientMails } = require('../../../controllers');

const sendClientMails = (req, res) => {
  try {
    const firstName = 'Joshua';
    const response = createClientMails(firstName);
    if (response) {
      res.status(200).send({ message: 'Mails enviados' });
    }
  } catch (error) {
    res.status(400).send({ message: 'Error al enviar los mails' });
  }
};

module.exports = sendClientMails;
