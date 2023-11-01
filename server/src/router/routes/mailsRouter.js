const { Router } = require('express');
const mailsRouter = Router();

//handlers
const {
  sendClientMails,
  sendAdminMails,
  sendOrderMails
} = require('../../handlers');

mailsRouter.post('/client', sendClientMails);
mailsRouter.post('/admin', sendAdminMails);
mailsRouter.post('/order', sendOrderMails);

module.exports = mailsRouter;
