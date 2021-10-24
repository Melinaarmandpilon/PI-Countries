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
        type: DataTypes.INTEGER,//ver si uso integer o ENUM ("1","2","3","4","5")
        allowNull: false
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    season:{
        type:DataTypes.ENUM("Summer", "Autumn","Winter","Spring"),
        allowNull: false
    },
    createdInDb:{//esta propiedad me sirve para hacer una distrincion entre lo que me trae la API y la base de datos, 
        //ya que hace mas facil para traer la actividad turistica creada en la base de datos
       // esta propiedad solamente la va a tener los creados en la base de datos, los de la API no
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
  });
};
