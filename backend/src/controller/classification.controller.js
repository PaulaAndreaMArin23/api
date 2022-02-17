const Classification = require('../models/Classification');

const findAll = (req , res) => {

    Classification.find()
        .then(classifications => {
            res.status(200).send(classifications);
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const findOne = (req , res) => {

    var cod = parseInt(req.params.codigo);
    Classification.find({"codigo": cod})
        .then(classifications => {
            if(classifications.length == 0){
                console.log("No encontró classifications");
                res.status(404).send({
                    "message": "No encontró el classifications"
                });
            } else{
                console.log("Encontró classifications");
                res.status(200).send(classifications);
            }
            
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

module.exports = {
    findAll,
    findOne
}