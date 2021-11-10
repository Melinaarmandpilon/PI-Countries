const { Router } = require("express");
const { Country, Activity } = require("../db"); //importo el modelo de la base de datos
const { Op } = require("sequelize");

const router = Router();



router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      //pregunto si el usuario esta intentando buscar un pais por su nombre pasado como query parameter 
      let country = await Country.findAll({
        include: Activity, 
        where: {
         
          name: {
            [Op.iLike]:name + "%",
          },
          
        },
        order: [["name", "ASC"]],
      });
      return res.send(country);
     
      
    } else if (!name) {
      let country = await Country.findAll({
        include: Activity,
        order: [["name", "ASC"]],
      });
      return res.send(country);
    }
  } catch (error) {
    res.status(404).send("Country not found");
  }
});


router.get("/:idPais", async (req, res) => {
  try {
    const { idPais } = req.params;
    const detailCountry = await Country.findByPk(idPais.toUpperCase(), {
      include: Activity,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.send(detailCountry);
  } catch (error) {
    res.status(404).send("Country detail not found");
  }
});

module.exports = router;
