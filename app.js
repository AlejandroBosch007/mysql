var express = require('express');
var app = express();
require('dotenv').config()
const sequelize = require('./db/conexion');
const booksViews = require('./view/book')
const autorViews = require('./view/autor')


app.use(express.json())

async function serverStart() {
    try {
        await sequelize.authenticate();

        console.log('Correct SQL conexion');

        app.listen(process.env.PORT, function () {
            console.log(`Sistem start http://${process.env.HOST}:${process.env.PORT}`);
        });

      } catch (error) {
        console.error('SQL conexion error:', error);
      }
}

serverStart();

//Routes
booksViews(app);
autorViews(app);