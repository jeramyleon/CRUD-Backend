const express = require('express');
const router = express.Router();
const {Student} = require('../models');
//Gets every single student
router.get("/", async(req, res)=>{
    try{
        const students = await Student.findAll();
        res.json(students);
    }
    catch(err){
        res.status(500).json({error:'Failed to fetch students data'})
    }
});
router.post("/", async(req ,res)=>{
    try{
        const students = await Student.create(req.body);
        res.status(201).json(students);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});
//gets one student specifically by ID
router.get("/:id", async (req,res)=>{
    try{
        const students = await Student.findByPk(req.params.id);
        if(students){
            res.json(students);
        }
        else{
            res.status(404).json({error:"Student not found"});
        }
    }
    catch(error){
        res.status(500).json({error:"Failed to fetch the specified student data"});
    }
});
//deletes students by specified id
router.delete("/:id", async (req, res)=>{
    try{
        const erased = await Student.destroy({
            where: { id: req.params.id},
        });
         if(erased){
            res.status(204).send();
        }
        else{
            res.status(404).json({error:"Student not found"});
        }
    }
     catch(err){
            res.status(500).json({error:"Failed to delete student"});
        }      
    });


module.exports = router;