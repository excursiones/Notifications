const { Router } = require('express');

const rutas = require('../routes/rutas');
const bd = require('../resources/bd_consultas');
const enrutador = require('../routes/enrutador');

enrutador.post(rutas.crear_notificacion, (req, res) => {
    bd.crear(bd.tablas.notificaciones, req.body, (error, resultado) => {
        if (error) { console.error(error); return; }
        res.send(resultado);
    });
});

module.exports = enrutador;