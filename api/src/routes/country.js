const { Router } = require("express");
const { Country, Activity } = require("../db"); //importo el modelo de la base de datos
const { Op } = require("sequelize");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      //pregunto si el usuario esta intentando buscar un pais por su nombre pasado como query parameter //la voy a usr para mi barra de busqueda
      let country = await Country.findAll({
        //busco todos los paises
        where: {
          //donde
          name: {
            //el nombre
            [Op.iLike]: name + "%", //va ignorar miniscula y mayuscula y No necesariamente tiene que ser una matcheo exacto
          },
        },
      });
      return res.send(country);
    }
  } catch (error) {
    res.status(404).send("Country not found");
    // console.log(error)
  }
});

router.get("/:idPais", async (req, res) => {
  try {
    const { idPais } = req.params;
    const detailCountry = await Country.findByPk(
      idPais.toUpperCase(),//CONVIERTO A MAYUSCULA
      {
        include:Activity
    });
    return res.send(detailCountry);
    
  } catch (error) {
    res.status(404).send("Country detail not found")
  }
});

module.exports = router;
