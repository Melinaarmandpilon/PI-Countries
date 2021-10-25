const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
        type:DataTypes.UUID,//UUID:secuencia aleatoria de numeros
        defaultValue:DataTypes.UUIDV4, //para que sequelize genere los ID automáticamente
        allowNull:true,
        primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    difficulty:{
        type: DataTypes.INTEGER,
        validate:{
          min:1,
          max:5
        },
        allowNull: false
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    season:{
        type:DataTypes.ENUM("Summer", "Autumn","Winter","Spring"),
        allowNull: false
    }
  },
  {
    timestamps:false //CON ESTO ELIMINO los campos createdAt y updatedAt QUE VIENEN POR DEFAULT
  }
  );
};
