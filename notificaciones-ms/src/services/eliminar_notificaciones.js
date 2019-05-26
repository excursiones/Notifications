const { Router } = require('express');

const rutas = require('../routes/rutas');
const enrutador = require('../routes/enrutador');
const bd = require('../resources/bd_consultas');

enrutador.delete(rutas.eliminar_notificacion, (req, res) => {

    if (!req.params["id"]) {
        res.json({
            error: "No se encontro el parametro id"
        });
        return;
    }
    const condicion = "id = " + req.params["id"];
    bd.eliminar(bd.tablas.notificaciones, condicion, (error, result) => {
        if (error) { throw error; return; }
        res.json(result);
    })
});

module.exports = enrutador;