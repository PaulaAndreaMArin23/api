const mongoose = require("mongoose");

const ClassificationShema = mongoose.Schema({
    codigo: {
        type: Number,
        min: 1,
        unique: true
    },
    nombre: {
        type: String,
        minlength: 1,
        requiere: true
    }
});

module.exports = mongoose.model("Clasificaciones", ClassificationShema);
