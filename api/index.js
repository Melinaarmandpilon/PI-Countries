const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { Country } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    const getcountries = await axios.get("https://restcountries.com/v3/all");
    // console.log("ESTO ME TRAE LA API",getcountries.data)
    getcountries.data.map(async (country) => {
      try {
        await Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continents: country.continents[0],
            capital: country.capital?.length
              ? country.capital[0]
              : "The capital is not found",
            subregion: country.subregion
              ? country.subregion
              : "The subregion is not found",
            area: country.area,
            population: country.population,
          },
        });
      } catch (error) {
        //   res.status(404).send(error)
        console.log(error);
      }
    });
  });
});
