const { updateUserById } = require('./../../../controllers');

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, address } = req.body;

    const recibedProperties = { name, email, password, address };

    const filledProperties = Object.entries(recibedProperties)
      // eslint-disable-next-line no-unused-vars
      .filter(([_, value]) => {
        return (
          (typeof value === 'string' && value.trim() !== '') ||
          (Array.isArray(value) && value.length > 0) ||
          typeof value === 'object'
        );
      })
      .map(([key, value]) => [key, value]);

    const filledObject = Object.fromEntries(filledProperties);

    const user = await updateUserById(id, filledObject);

    if (!user) {
      throw new Error('An error ocurred while updating the user');
    }

    return res.status(200).json('Data updated succesfully');
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = updateUser;
