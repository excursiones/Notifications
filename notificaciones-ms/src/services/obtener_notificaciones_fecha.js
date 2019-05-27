const { Router } = require('express');

const rutas = require('../routes/rutas');
const enrutador = require('../routes/enrutador');
const bd = require('../resources/bd_consultas');

enrutador.get(rutas.obtener_notificacion_fecha, (req, res) => {
    const { fecha } = req.body;
    let aux;

    fecha ? (fecha.split(" ").length == 1 ? bd.leer(bd.tablas.notificaciones, [], (`DATE(fecha) = "${fecha}"`), (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        res.json(result);
    }) : bd.leer(bd.tablas.notificaciones, [], (`fecha = "${fecha}"`), (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        res.json(result);
    })) : null;

    const { fecha1, fecha2 } = req.body;

    (fecha1 && fecha2) ? (
        fecha1.split(" ").length == 1 ? (
            fecha2.split(" ").length == 1 ? (
                bd.leer(bd.tablas.notificaciones, [], (`DATE(fecha) BETWEEN "${fecha1}" AND "${fecha2}"`), (error, result) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    res.json(result);
                })
            ) : (
                    bd.leer(bd.tablas.notificaciones, [], (`DATE(fecha) >= "${fecha1} AND fecha <="${fecha2}"`), (error, result) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        res.json(result);
                    })
                )
        ) : (
                fecha2.split(" ").length == 1 ? (
                    bd.leer(bd.tablas.notificaciones, [], (`fecha >= "${fecha1}" AND DATE(FECHA) <= "${fecha2}"`), (error, result) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        res.json(result);
                    })
                ) : (
                        bd.leer(bd.tablas.notificaciones, [], (`fecha BETWEEN "${fecha}" AND "${fecha2}"`), (error, result) => {
                            if (error) {
                                console.error(error);
                                return;
                            }
                            res.json(result);
                        })
                    )
            )
    ) : (null)

});

module.exports = enrutador;