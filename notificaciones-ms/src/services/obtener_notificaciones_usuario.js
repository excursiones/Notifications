const { Router } = require('express');

const rutas = require('../routes/rutas');
const enrutador = require('../routes/enrutador');
const bd = require('../resources/bd_consultas');

enrutador.get(rutas.obtener_notificacion_usuario, (req, res) => {
    let condiciones = null;
    let params = {};

    params = Object.assign(params, req.query);
    params = Object.assign(params, req.params);
    params = Object.assign(params, req.body);
    for (const param in params) {
        if (params.hasOwnProperty(param)) {
            const condicion = params[param];

            condiciones == null ? condiciones = "" : null;
            condiciones += param + " = " + condicion;
        }
    }

    bd.leer(bd.tablas.notificaciones, [], condiciones, (error, result) => {
        if (error) { throw error; return; }
        res.json(result);
    })
});

module.exports = enrutador;