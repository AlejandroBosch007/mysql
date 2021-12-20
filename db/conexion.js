const Sequelize = require('sequelize');

const sequelize = new Sequelize('tecla', 'root' , null, {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;

