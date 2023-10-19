const User = require("../models/user");
const bcrypt = require('bcrypt');
const passwordValidator = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

const UsersController = {
  Create: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      if (!password.match(passwordValidator)) {
        return res.status(400).json({
          message:
            'Password must contain at least 6 characters, including at least one uppercase letter and a number.',
        });
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
      res.status(500).json({ message: 'Error creating user' });
    }
  },
};

module.exports = UsersController;

