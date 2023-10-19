const User = require("../models/user");
const bcrypt = require('bcrypt');

const UsersController = {
  Create: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        email: email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

module.exports = UsersController;
