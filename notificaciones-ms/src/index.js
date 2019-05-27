const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const servicios = require('./services/servicios');

//creando servidor
const app = express(); //Servidor Creado
app.set('port', process.env.APP_PORT);

//midlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

for (const servicio in servicios) {
    app.use(servicios[servicio]);
}

//servidor corriendo
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
})

// run with nodemon src/index.js

