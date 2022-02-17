const mongoose = require("mongoose");

const Favorite_listShema = mongoose.Schema({
    codigo: {
        type: Number,
        min: 1,
        unique: true
    },
    // cod_usuario: {
    //     type: Number,
    //     min: 1,
    // },
    cod_pelicula: {
        type: Number,
        min: 1
    }
});

module.exports = mongoose.model("Pelicula", Favorite_listShema);
