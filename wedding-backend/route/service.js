const express = require('express')
const router = require('express').Router()
const mongoose = require('mongoose')
const Service = mongoose.model('Service')
const authguard = require('../middleware/authguard')
// const {productValidation}=require('../validator/validation')
var ObjectId = require('mongodb').ObjectID;


router.get('/service', authguard, async (req, res) => {
  try {
    let search = req.query.search;
    const data = await Service.find({ $or: [{ name: new RegExp(search, "i") }] }).sort({ createdAt: -1 }).populate('createdBy')
    return res.status(200).json({ data: data })
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "something went wrong.." })
  }
})

router.get('/allpost',async (req, res) => { 
  res.status(500).json({ message: "something went wrong.." })
})

router.post("/create", authguard, async (req, res, next) => {
  const { name, price, pic ,service} = req.body
  const product = new Service({
    name, price, createdBy: req.user._id ,pic ,service
  })

  try {
    const newItem = await product.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router

