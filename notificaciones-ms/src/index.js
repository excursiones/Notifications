const express = require('express');
const morgan = require('morgan');

const bd = require('./resources/bd_consultas');

const app = express(); //Servidor Creado
app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));

// const data = {
//     motivo: "reservación"
// };
bd.leer(bd.tablas.notificaciones, [], null, (error, result) => {
    if (error) console.error(error);

    console.log(result);
});

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
})

// run with nodemon src/index.js

