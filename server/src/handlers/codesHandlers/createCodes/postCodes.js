const { createCodes } = require('../../../controllers');

const postCodes = async (req, res) => {
  try {
    const codeToCreate = req.body;
    const codeCreated = await createCodes(codeToCreate);
    if (!codeCreated)
      throw new Error('The code could not be created');
    res.status(201).json(codeCreated);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = postCodes;
