const express = require("express");
const router = express.Router();

//@router GET api/auth
//@desc  get loggedin user
//@access private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//@router POST api/auth
//@desc  Auth user and get token
//@access private
router.post("/", (req, res) => {
  res.send("login  user");
});

module.exports = router;
