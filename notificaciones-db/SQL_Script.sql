USE notificaciones_bd;

DROP TABLE IF EXISTS notificaciones;

    CREATE TABLE IF NOT EXISTS notificaciones
    (
        id INT
        AUTO_INCREMENT, 
    fecha DATETIME NOT NULL,
    activa BOOLEAN NOT NULL,
    motivo varchar(150) NOT NULL, 
    id_usuario INT NOT NULL, 
    id_excursion int not null, 
    PRIMARY KEY
        (id)
);