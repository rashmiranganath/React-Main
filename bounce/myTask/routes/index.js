const userController = require("../controller/index");
const userController1 = require("../controller/bossCont")
/**
 *Initializing the express router
 */
const express = require("express");
const router = express.Router();

console.log('routes')


/**
 * POST request to create a new user in employee list 
 */
router.post("/create", userController.createUser);


/**
 * Post request to create boss data
 */
router.post("/createBoss",userController1.createUser)

/**Get request for getting the data of a particular id */
router.get("/getBossData", userController1.getId)

module.exports = router;


