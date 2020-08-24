const express = require("express");

const router = express.Router();

//@route GET api/contacts
//@desc get all users contact
//@access private

router.get("/", (req, res) => {
  res.send("Get all contaacts");
});

//@route POST api/contacts
//@desc add new contact
//@access private

router.post("/", (req, res) => {
  res.send("Add new contact");
});

//@route PUT api/contacts/:id
//@desc update contact
//@access private

router.put("/", (req, res) => {
  res.send("Update new contact");
});

//@route DELETE api/contacts/:id
//@desc delete contact
//@access private

router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
