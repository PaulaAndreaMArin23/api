const Category = require('../models/Category');

const findAll = (req , res) => {

    Category.find()
        .then(categories => {
            res.status(200).send(categories);
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const findOne = (req , res) => {

    var cod = parseInt(req.params.codigo);
    Category.find({"codigo": cod})
        .then(categories => {
            if(categories.length == 0){
                console.log("No encontrĂ³ categories");
                res.status(404).send({
                    "message": "No encontrĂ³ el categories"
                });
            } else{
                console.log("EncontrĂ³ categories");
                res.status(200).send(categories);
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