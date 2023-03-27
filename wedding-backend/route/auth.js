const express = require('express')
const router = require('express').Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Service = mongoose.model('Service')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SCECRET } = require('../route/key')
const authguard = require('../middleware/authguard')
const dotenv = require('dotenv')
router.get('/protect', authguard, (req, res) => {
  res.send('hlooo')
})

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const userexist = await User.findOne({email:req.body.email})  //await checkEmail(req.body.email);
  if (userexist) return res.status(400).send(" email already exist");
  const user = new User();
  user["name"] = req.body.name;
  user["password"] = req.body.password;
  user["email"] = req.body.email;
  user["role"]=req.body.role;
  try {
    const senduser = await user.save();
    return res.send({ senduser });
  } catch (err) {
    return res.status(502).json({ message: err });
  }
});





router.post("/login", async (req, res) => {
  console.log(req.body, "hloo");
  const user = await User.findOne({email:req.body.email});
  if (!user) return res.status(400).send("invalid email");
  try {
    const token = jwt.sign({ _id: user._id }, JWT_SCECRET);
    console.log(token);
    return res.header("auth-token", token).json({ token: token ,user : user})
  } catch (err) {
    console.log(err)
    return res.status(502).json({ message: 'invalid email or password' });
  }
});


router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).send("invalid User");
  const service=await Service.findOne({createdBy:req.params.id})
  try {
    return res.status(200).json({ user: user,service:service })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong' });
  }
});
module.exports = router