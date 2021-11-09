const { Router } = require('express');
const { Country, Activity,Country_Activity } = require("../db");


const router = Router();

router.get("/",async (req,res)=>{
    const findActivity= await Activity.findAll()
    res.send(findActivity)
})

router.post("/",async (req,res)=>{
    try {
        const {name,difficulty,duration,season,countries}=req.body;
        const newActivity=  await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        console.log("newActivity",newActivity.toJSON());

        await newActivity.addCountry(countries) 
        res.send(" Se añadió actividad turistica con exito")

    } catch (error) {
        // res.send(error)
        console.log(`Se produjo el siguiente error ${error}`)
    }
    
})


module.exports = router;
