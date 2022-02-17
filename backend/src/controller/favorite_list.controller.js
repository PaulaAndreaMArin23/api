const Favorite_list = require("../models/Favorite_list");

const findAll = (req, res) => {
    Favorite_list.find()
        .then((favorite_list) => {
            res.status(200).send(favorite_list);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Ocurrio un problema" || err.message,
            });
        });
};

const findOne = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Favorite_list.find({ codigo: cod })
        .then((favorite_list) => {
            if (favorite_list.length == 0) {
                console.log("No encontró favorite_list");
                res.status(404).send({
                    message: "No encontró el favorite_list",
                });
            } else {
                console.log("Encontró favorite_list");
                res.status(200).send(favorite_list);
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Ocurrio un problema" || err.message,
            });
        });
};

const create = (req, res) => {
    const favorite_list = new Favorite_list({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        // co_usuario: req.body.co_usuario,
        co_pelicula: req.body.co_pelicula
    });

    favorite_list
        .save()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Ocurrio un problema" || err.message,
            });
        });
};

const update = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Favorite_list.update(
        { codigo: cod },
        {
            $set: {
                nombre: req.body.nombre,
                // co_usuario: req.body.co_usuario,
                co_pelicula: req.body.co_pelicula
            },
        }
    )
        .then((favorite_list) => {
            res.status(200).send(favorite_list);
        })
        .catch((err) => {
            res.status(500).send("Ocurrio un error");
        });
};

const delet = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Favorite_list.deleteOne({
        codigo: cod,
    })
        .then((favorite_list) => {
            if (favorite_list.deleteCount == 0) {
                console.log("No Borró");
                res.status(404).send("no encontró el favorite_list");
            } else {
                res.status(200).send("favorite_list eliminado ");
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
