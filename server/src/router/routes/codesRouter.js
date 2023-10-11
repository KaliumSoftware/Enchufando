const { Router } = require('express');
const { getAllCodes, postCodes } = require('../../handlers');
const codesRouter = Router();

codesRouter.get('/', getAllCodes);
codesRouter.post('/', postCodes);
module.exports = codesRouter;
