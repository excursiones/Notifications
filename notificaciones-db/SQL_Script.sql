USE notificaciones_bd;

CREATE TABLE
IF NOT EXISTS notificaciones
(
        id INT
        AUTO_INCREMENT, 
    fecha DATETIME NOT NULL,
    activa BOOLEAN NOT NULL,
    motivo varchar
(150) NOT NULL, 
    id_usuario INT NOT NULL, 
    id_excursion int not null, 
    PRIMARY KEY
(id)
);

CREATE INDEX
IF NOT EXISTS fecha_index ON notificaciones
(fecha);
CREATE INDEX
IF NOT EXISTS id_usuario_index ON notificaciones
(id_usuario);
CREATE INDEX
IF NOT EXISTS id_excursion_index ON notificaciones
(id_excursion);
CREATE INDEX
IF NOT EXISTS status_index ON notificaciones
(activa);
