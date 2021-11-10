const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {//debería arrojar un error si el nombre es nulo
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {//debería funcionar cuando es un nombre válido
        Country.create({ name: 'Argentina' });
      });
    });

    describe("Required fields",()=>{
      
      it('Should throw an error if a required field is null',done=>{//Debería arrojar un error si un campo obligatorio es nulo
        Country.findOrCreate({
          id:"ARG",
          name:"Argentina",
          capital:"Buenos Aires",
          continent:"Americas",
        })
        .then(()=>done("It shouldn't have been created"))//No deberia haberse creado
        .catch(()=>done());
      })

      it("Id must be a three characters string",done=>{//El ID debe ser una cadena de tres caracteres
        Country.findOrCreate({
          id:"Argentina",
        })
        .then(()=>done("It shouldn't have been created"))//No deberia haberse creado
        .catch(()=>done())

      })
    })
  });
});
