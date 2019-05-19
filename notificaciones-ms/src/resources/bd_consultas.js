const mysql = require('mysql');

const bd_nombre = 'notificaciones_db';
const t_notificaciones = "notificaciones";
const t_motivo = "motivo";

const bd_modulo = {};

const bd_conf = {
    host: 'localhost',
    user: 'notificaciones_admin',
    password: '1234',
    database: bd_nombre
};

const bd = mysql.createConnection(bd_conf);

bd.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("Conectado a ", bd_nombre);
});


//Queries CRUD

const crear = (tabla, datos = {}, cb) => {
    if (!tabla) cb("Debe especificar una tabla");

    const llaves = Object.keys(datos);

    if (llaves.length == 0) {
        console.log("No hay nada para crear");
        return;
    }

    if (datos.id != undefined) {
        console.error("No se puede asignar un id");
        return;
    }

    let SQL_crear = "INSERT INTO ?? SET ?";
    SQL_crear = mysql.format(SQL_crear, [tabla, datos]);

    bd.query(SQL_crear, (error, result, fields) => {
        if (error) cb(error);
        cb(null, result);
    });

};

const leer = (tabla, campos = [], condiciones, cb) => {
    if (!tabla) {
        cb("Debe especificar una tabla");
        return;
    }
    campos = campos[0] ? campos : "";
    condiciones = condiciones || "";
    let SQL_leer = "SELECT ?? FROM ?? " + (condiciones ? "WHERE ? " : "");


    SQL_leer = mysql.format(SQL_leer, [campos, tabla, condiciones]);


    let consulta = bd.query(SQL_leer, (error, result, fields) => {
        if (error) console.error(error);
        cb(result);
    });

    console.log(consulta.sql);

}

const actualizar = () => {

}

const eliminar = () => {

}

bd_modulo.crear = crear;
bd_modulo.leer = leer;
bd_modulo.actualizar = actualizar;
bd_modulo.eliminar = eliminar;

module.exports = bd_modulo;
