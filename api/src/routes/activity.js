const { Router } = require('express');
const {Activity}=require("../db")


const router = Router();

router.get("/",async (req,res)=>{
    const findActivity= await Activity.findAll()
    res.send(findActivity)
})

router.post("/",async (req,res)=>{
    const {id,name,difficulty,duration,season,createdInDb}=req.body;
    try {
        const newActivity=  await Activity.create({
            id,
            name,
            difficulty,
            duration,
            season,
            createdInDb
        })
         res.send(newActivity)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;
