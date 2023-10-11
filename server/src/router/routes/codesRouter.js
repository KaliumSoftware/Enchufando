const { Router } = require('express');
const { getAllCodes } = require('../../handlers');
const codesRouter = Router();

codesRouter.get('/', getAllCodes);

module.exports = codesRouter;
