const { compareUser } = require('./../../../controllers');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const access = await compareUser(email, password);

    if (access.message === 'email') {
      return res
        .status(401)
        .json({ message: 'Email not registered' });
    } else if (access.message === 'password') {
      return res.status(401).json({ message: 'Password incorrect' });
    }

    return res.status(200).json(access);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;
