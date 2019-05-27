const path = "/notificaciones"
const rutas = {
    crear_notificacion: path,
    obtener_notificaciones: path,
    obtener_notificacion_usuario: path + "/usuario/:id_usuario",
    obtener_notificacion_fecha: path + "/fecha",
    obtener_notificacion_excursion: path + "/excursion/:id_excursion",
    eliminar_notificacion: path + "/eliminar/:id",
    enviar_correo: path + "/enviar"
};

module.exports = rutas;