const servicios = {
    crear_notificacion: require('./crear_notificaciones'),
    obtener_notificaciones: require('./obtener_notificaciones'),
    obtener_notificaciones_usuario: require('./obtener_notificaciones_usuario'),
    obtener_notificaciones_fecha: require('./obtener_notificaciones_fecha'),
    obtener_notificaciones_excursion: require('./obtener_notificaciones_excursion'),
    eliminar_notificaciones: require('./eliminar_notificaciones'),
    mailer: require('./mailer')
};

module.exports = servicios;