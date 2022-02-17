const Film = require("../models/Film");

const findAll = (req, res) => {
    Film.find()
        .then((films) => {
            res.status(200).send(films);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Ocurrio un problema" || err.message,
            });
        });
};

const findOne = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Film.find({ codigo: cod })
        .then((films) => {
            if (films.length == 0) {
                res.status(404).send({
                    message: "No encontró el films",
                });
            } else {
                res.status(200).send(films);
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Ocurrio un problema" || err.message,
            });
        });
};

const create = (req, res) => {
    const film = new Film({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion,
        elenco: req.body.elenco,
        creadores: req.body.creadores,
        imagen: {
            pequeno: req.body.imagen.pequeno,
            grande: req.body.imagen.grande,
        },
        co_categoria: req.body.co_categoria,
        co_clasificacion: req.body.co_clasificacion,
    });
    film.save()
        .then((datos) => {
            res.status(200).send("Film Creado Correctamente");
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

const update = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Film.updateOne(
        { codigo: cod },
        {
            $set: {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: {
                    pequeno: req.body.imagen.pequeno,
                    grande: req.body.imagen.grande,
                },
            },
        }
    )
        .then((film) => {
            res.status(200).send(film);
        })
        .catch((err) => {
            res.status(500).send("Ocurrio un error");
        });
};

const delet = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Film.deleteOne({
        codigo: cod,
    })
        .then((film) => {
            if (film.deleteCount == 0) {
                console.log("No Borró");
                res.status(404).send("no encontró el film");
            } else {
                res.status(200).send("film eliminado ");
            }
        })
        .catch((err) => {
            res.status(500).send("Ocurrio un error");
        });
};

module.exports = {
    findAll,
    findOne,
    create,
    update,
    delet,
};
