const router = require("express").Router();

const { addUser,authUser} = require("../controller/user_RegistrationController");
const { addProperty,getAllProperties,updateProperty,getPropertyByID,deleteProperty} = require("../controller/propertyController");


/***********User Routs*************/
// user authentication api route
router.route('/registration').post(addUser);
router.route('/login').post(authUser);

/***********Property Routs*************/

router.route('/addProperty').post(addProperty);
router.route('/editProperty').patch(updateProperty);
router.route('/viewAllProperty').get(getAllProperties);
router.route('/deleteProperty').delete(deleteProperty);
router.route('/getPropertyByID').get(getPropertyByID);

module.exports = router;