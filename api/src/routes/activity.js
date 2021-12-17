const { Router } = require('express');
const { Country, Activity,Country_Activity } = require("../db");
const { route } = require('./country');


const router = Router();

router.get("/",async (req,res)=>{
    const findActivity= await Activity.findAll()
    res.send(findActivity)
})

router.post("/",async (req,res, next)=>{
    try {
        const {name,difficulty,duration,season,countries}=req.body;

        const newActivity=  await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
       
        await newActivity.addCountry(countries) //countries es el id del pais
        
        res.send("Tourist activity added successfully")

    } catch (error) {
        next (error)
    }
    
})



module.exports = router;
