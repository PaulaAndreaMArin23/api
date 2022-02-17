const User = require('../models/User');

const findAll = (req , res) => {

    User.find()
        .then(users => {
            res.status(200).send(users);
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const findOne = (req , res) => {

    var cod = parseInt(req.params.codigo);
    User.find({"codigo": cod})
        .then(user => {
            if(user.length == 0){
                console.log("No encontró user");
                res.status(404).send({
                    "message": "No encontró el user"
                });
            } else{
                console.log("Encontró user");
                res.status(200).send(user);
            }
            
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const create = (req , res) => {

    const user = new User({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        email: req.body.email,
        co_tipo_usuario: req.body.co_tipo_usuario
    });

    user.save()
        .then(data => {
            res.status(200).send(data);
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const update = (req, res) => {
    var cod = parseInt(req.params.codigo);
    User.update(
        {"codigo" : cod},
        {
            $set:{
                nombre: req.body.nombre,
                email: req.body.email,
                co_tipo_usuario: req.body.co_tipo_usuario
            }
        }
    )
    .then(user => {
        res.status(200).send(user);        
    }).catch(err => {
        res.status(500).send("Ocurrio un error");
    });
};

const delet = (req, res) => {
    var cod = parseInt(req.params.codigo);
    User.remove({
        "codigo": cod})
        .then (user => {
            
            if(user.deleteCount == 0) {
                console.log("No Borró");
                res.status(404).send("no encontró el user");
            }else {
                res.status(200).send("user eliminado ");
            }
        }).catch(err => {
            res.status(500).send("Ocurrio un error");
    });
};


module.exports = {
    findAll,
    findOne,
    create,
    update,
    delet
}