const mysql = require('mysql');

const bd_nombre = 'notificaciones_db';

const tablas = {
    notificaciones: "notificacion",
    motivos: "motivo"
}

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
        if (error) {
            cb(error);
            return;
        }
        cb(null, result);
    });

};

const leer = (tabla, campos = [], condiciones, cb) => {
    if (!tabla) {
        cb("Debe especificar una tabla");
        return;
    }

    const values = [];
    campos[0] ? values.push(campos) : null;
    values.push(tabla);

    let SQL_leer = `SELECT ${campos[0] ? "??" : "*"} FROM ?? ${condiciones ? "WHERE " + condiciones : ""}`;


    SQL_leer = mysql.format(SQL_leer, values);


    bd.query(SQL_leer, (error, result, fields) => {
        if (error) {
            cb(error);
            return;
        }
        cb(null, result);
    });

}

const actualizar = (tabla, asignaciones, condiciones, cb) => {
    if (!tabla) {
        cb("Agregue una tabla para actualizar");
        return;
    }

    if (!asignaciones) {
        cb("No hay asignaciones, Omitiendo Actualización a la tabla " + tabla);
        return;
    }

    const values = [];
    values.push(tabla);
    values.push(asignaciones);

    const SQL_actualizar = `UPDATE ?? SET ? ${condiciones ? "WHERE " + condiciones : ""}`;

    bd.query(SQL_actualizar, values, (error, resultado) => {
        if (error) {
            cb(error);
            return;
        }
        cb(null, resultado);
    });
}

const eliminar = (tabla, condiciones, cb) => {
    if (!tabla) {
        cb("Agregue una tabla para actualizar");
        return;
    }

    const SQL_actualizar = `DELETE FROM ?? ${condiciones ? "WHERE " + condiciones : ""}`;

    bd.query(SQL_actualizar, tabla, (error, resultado) => {
        if (error) {
            cb(error);
            return;
        }
        cb(null, resultado);
    });
}

bd_modulo.crear = crear;
bd_modulo.leer = leer;
bd_modulo.actualizar = actualizar;
bd_modulo.eliminar = eliminar;
bd_modulo.tablas = tablas;

module.exports = bd_modulo;
