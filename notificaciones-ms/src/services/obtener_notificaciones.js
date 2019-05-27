const { Router } = require('express');

const rutas = require('../routes/rutas');
const enrutador = require('../routes/enrutador');
const bd = require('../resources/bd_consultas');

enrutador.get(rutas.obtener_notificaciones, (req, res) => {

    bd.leer(bd.tablas.notificaciones, [], null, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        res.json(result);
    })
});

module.exports = enrutador;