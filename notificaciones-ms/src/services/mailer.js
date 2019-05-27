const nodemailer = require('nodemailer');

const enrutador = require('../routes/enrutador');
const rutas = require('../routes/rutas');

enrutador.post(rutas.enviar_correo, (req, res) => {
    console.log(req.body);

    mail(req.body["destinatarios"], req.body["asunto"], req.body["contenido"], req.body["masOpciones"], "gmail", function (err, data) {
        if (err) {
            res.status(500);
            res.json({
                mensaje: "No se pudo enviar el correo",
                error: err
            })
            return;
        }
        res.status(200);
        res.json({
            mensaje: "Enviado",
            data: data
        })
    });
});

async function mail(destinatarios = [], asunto = "", contenido, masOpciones = {}, service, cb) {

    console.log(destinatarios);

    console.log(cb);


    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: process.env.EMAIL_ADMIN,
            pass: process.env.EMAIL_PASSWORD_ADMIN
        }
    });

    let _masOpciones = {};
    if (masOpciones["cc"]) _masOpciones = Object.assign(_masOpciones, masOpciones);
    if (masOpciones["bcc"]) _masOpciones = Object.assign(_masOpciones, masOpciones);
    let options = {
        from: process.env.EMAIL_ADMIN,
        to: destinatarios ? ((typeof destinatarios === typeof []) ? destinatarios.toString() : null) : null,
        subject: asunto,
        text: contenido
    };

    options = Object.assign(options, _masOpciones);

    transporter.sendMail(options, (err, data) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, data);
    })

}

module.exports = enrutador;