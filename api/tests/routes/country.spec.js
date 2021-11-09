/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);//No se puede conectar a la base de datos
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create({
      id:"ARG",
      name:"Argentina",
      flag:"https://flagcdn.com/w320/ar.png",
      capital:"Buenos Aires",
      continent:"Americas"
    })));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it("Espera que sea un html",()=>{
      agent.get("/countries").expect("Content-Type",/html/)
    })
  });
});
