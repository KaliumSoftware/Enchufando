const { Router } = require('express');
const {
  getAllCodes,
  postCodes,
  deleteAllCodes,
  deleteCodeByName
} = require('../../handlers');
const codesRouter = Router();

codesRouter.get('/', getAllCodes);
codesRouter.post('/', postCodes);
codesRouter.delete('/', deleteAllCodes);
codesRouter.delete('/:name', deleteCodeByName);
module.exports = codesRouter;
