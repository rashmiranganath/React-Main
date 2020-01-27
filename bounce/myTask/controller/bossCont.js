/**
 * Mongoose User model.
 */
const  User = require("../schema/boss");
const HttpStatus = require("http-status-codes");
require("dotenv").config;

console.log('controller')


/**
 * Creating the new user
 */

module.exports.createUser= (req, res) => {
    // Creating a user object from frontend data
    const newUser= new User({
        EmployerName: req.body.EmployerName,
        CompanyName: req.body.CompanyName,
        CEO: req.body.CEO,
        Address: req.body.Address,
        NumberEmployees : req.body.NumberEmployees
        
    });
    console.log(newUser);
    newUser.save()
            .then(user => res.status(HttpStatus.OK).json({ user }))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).json(err));
}

"================================================="

module.exports.getId =(req,res) => {

    User.findOne({_id:"5e10dd672390b72fea837d2a"}, (err, data) => {
      if (err)
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: "not found" });
      res.status(HttpStatus.OK).json(data);
    });
}