const express = require('express')
const router = require('express').Router()
const mongoose = require('mongoose');
const authguard = require('../middleware/authguard');
const { createError } = require('../utils/error');

var ObjectID = require('mongodb').ObjectID;

router.get("/allDepartments", async (req, res, next) => {

    try {
        const departments = await Department.find();
        res.status(201).json(departments);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/department/:id", authguard, async (req, res, next) => {
    try {
        const getDepartmentById = await Department.findOneById(req.params.id);
        res.status(201).json(getDepartmentById);
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
});


router.post("/createDepartment", async (req, res) => {
    const department = new Department(req.body);
    try {
        const newDepartment = await department.save();
        res.status(201).json(newDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});
router.put("/updateDepartment/:id", async (req, res, next) => {
    const failed = true;

    if (failed) { return next(createError(401, "You are not Authenticated!")) }

    try {
        const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (updatedDepartment) {
            res.status(201).json(updatedDepartment);
        }
        res.status(400).json({ message: 'Invalid id' });
    } catch (err) {
        // res.status(400).json({ message: err.message });
        next(err)
    }
});
router.delete("/deleteDepartment/:id", async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: "Department deleted" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



module.exports = router;