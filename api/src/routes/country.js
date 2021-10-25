const { Router } = require("express");
const { Country,Activity } = require("../db"); //importo el modelo de la base de datos

const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  
//   // let data=  await axios.get("https://restcountries.com/v3/all"); //traer todos los paises, esto me devuelve un arreglo de objetos
//   // //guardarlos en su propia base de datos
//   // let serverDb= await data.map(country =>{
//   //   return { Country.create(
  // where:
    //     { id:country.cca3,
//   //     name:country.common,
//   //     flag:country.flags[0],
//   //     continents:country.continents[0],
//   //     capital: country.capital?.length ? country.capital[0]:"The capital is not found",
				// subregion: country.subregion ? country.subregion : "The subregion is not found",
//   //     area:country.area,
//   //     population:country.population}
//   //   )
//   //  
//   //   }
//   // })

});


// router.get("/{idPais}", async (req, res) => {
  
//     const {idPais}=req.params;
//   const country= await Country.findAll()
//   return res.send(country);
//   // const countries= await axios.get("https://restcountries.com/v3/all")
 
// });

// module.exports = router;
