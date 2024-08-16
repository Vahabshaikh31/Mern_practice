const express = require("express");
const router = express.Router();
const home = require("./routers");
// const validate = require("../middleware/validate-middleware");
// const signupSchema = require("../Validator/auth-validatoe");

router.route("/").get(home);
// router.route("/register").post(validate(signupSchema), authController.register);
// router.route("/login").post(authController.Login);

module.exports = router;