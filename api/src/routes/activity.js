const { Router } = require('express');
const {Activity}=require("../db")


const router = Router();

router.get("/",async (req,res)=>{
    const findActivity= await Activity.findAll()
    res.send(findActivity)
})

router.post("/",async (req,res)=>{
    try {
        const {id,name,difficulty,duration,season}=req.body;
        const newActivity=  await Activity.create({
            id,
            name,
            difficulty,
            duration,
            season
        })
        console.log("newActivity",newActivity.toJSON());

        const addActivity=await Country.findByPk(id,)
        console.log("addActivity",addActivity.toJSON());
         res.json(await addActivity.addActivity(newActivity.name))

    } catch (error) {
        res.send(error)
    }
    
})


module.exports = router;
