const User = require("../models/user");
const TokenGenerator = require("../lib/token_generator");
const bcrypt = require('bcrypt');

const AuthenticationController = {

  Authenticate: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then((user) => {
      if (!user) {
        console.log("auth error: user not found");
        res.status(401).json({ message: "user not found" });
      } else {
        bcrypt.compare(password, user.password, (result) => {
          if (result) {
            const token = TokenGenerator.jsonwebtoken(user._id);
            res.status(201).json({ token: token, message: "OK", userId: user._id });
          } else {
            console.log("auth error: passwords do not match");
            res.status(400).json({ message: "incorrect password" });
          }
        });
      }
    }).catch((err) => {
      console.log("auth error: ", err);
      res.status(500).json({ message: "Internal Server Error" });
    });
  }
};

module.exports = AuthenticationController;
