USE notificaciones_db;

CREATE TABLE motivo
(
    id INT
    AUTO_INCREMENT,
    motivo VARCHAR
    (50),
    PRIMARY KEY
    (id)
);

    CREATE TABLE notificacion
    (
        id INT
        AUTO_INCREMENT, 
    fecha DATETIME NOT NULL, 
    activa BOOL NOT NULL, 
    motivo_id INT, 
    id_usuario INT NOT NULL, 
    id_excursion int not null, 
    PRIMARY KEY
        (id), 
    FOREIGN KEY
        (motivo_id) REFERENCES motivo
        (id)
);