const db = require('../config/db_PostgreSQL');
const axios = require('axios');

exports.ConsultaDatos = async (req,res) =>{

    //const newLocal = 'https://world.openfoodfacts.org/category/beers.json';
    //let resultados = await conexion.query('SQL_USUARIOS');
    //res.json(resultados.rows);
    //let resultados = await axios.get(newLocal);

      db.query('select * from usuarios')
      .then(data => {
          console.log(data);
          res.json(data);
      })
      .catch(error => {
          console.log(error);
          res.status(500).send('Error');
      });
}
