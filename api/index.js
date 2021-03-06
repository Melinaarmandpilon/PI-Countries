const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { Country } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    const getcountries = await axios.get("https://restcountries.com/v3/all");
    
    getcountries.data.map(async (country) => {
      try {
        await Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[1],
            continent: country.region,
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
        console.log(error);
      }
    });
  });
});
