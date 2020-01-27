/**
 * Importing  the mongoose driver.
 */
const mongoose = require("mongoose");

/**
 * Extracting Schema property from mongoose.
 */
const Schema = mongoose.Schema;

/**
 * Everything in Mongoose starts with a Schema.
 * Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */

/**
 * Creating the new mongoose Schema.
 */

const userSchema = new Schema({
  /**
   * To declare a path as a string you may use either the String global constructor or the string 'String'.
   * @SchemaType - String
   * The string Schema type will have the built -in validators as:
   * lowercase, uppercase, trim, match, enum, minlength, maxlength
   */

   
   

  EmployerName: {
    type: String,
  },

  CompanyName: {
    type: String,
  },

  CEO: {
    type: String
  },
  Address: {
    type: String
  },

  NumberEmployees :{
    type: Number
  }

});


module.exports =  mongoose.model("Boss",userSchema );

