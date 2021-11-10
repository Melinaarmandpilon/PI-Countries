/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  id: "ARG",
  name: "Argentina",
  flag: "https://flagcdn.com/w320/ar.png",
  capital: "Buenos Aires",
  continent: "Americas",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err); //No se puede conectar a la base de datos
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() =>
      Country.create(country)
    )
  );

  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
    it("Espera que sea un html", () => {
      agent.get("/countries").expect("Content-Type", /html/);
    });
  });
  
  describe("GET /countries/:idPais",  () =>{
    it("responde con 404 cuando el id del pais no existe",  ()=> {
      agent.get("/countries/argen").expect(404);
    });

    it("responde con 200 cuando el id del pais existe", () => {
       Country.create(country).then(() => {
         agent.get("/countries/ARG").expect(200);
      });
    });
    it("espera que sea html", function () {
      return agent.get("/countries/ARG").expect("Content-Type", /json/);
    });
  });

  describe("GET /activity", () => {
    it("should get 200", () => agent.get("/activity").expect(200));
    it("Espera que sea un html", () => {
      agent.get("/activity").expect("Content-Type", /html/);
    });
  });
  describe;
});
