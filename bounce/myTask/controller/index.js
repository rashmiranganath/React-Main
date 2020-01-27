/**
 * Mongoose User model.
 */
const { User } = require("../schema/employee");
const HttpStatus = require("http-status-codes");
require("dotenv").config;

console.log('controller')


/**
 * Creating the new user
 */

module.exports.createUser = (req, res) => {
    // Creating a user object from frontend data
    const newUser = new User({

      Name: req.body.Name,
      Address: req.body.Address,
      Gender: req.body.Gender,
      Number: req.body.Number,
      Married: req.body.Married,
      
    });

    newUser.save()
            .then(user => res.status(HttpStatus.OK).json({ user }))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).json(err));
}