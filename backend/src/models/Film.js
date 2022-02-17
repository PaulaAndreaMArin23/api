const mongoose = require("mongoose");

const FilmShema = mongoose.Schema({
    codigo: {
        type: Number,
        min: 1,
        unique: true,
    },
    nombre: {
        type: String,
        minlength: 5,
        require: true,
    },
    duracion: {
        type: String,
        minlength: 2,
        require: true,
    },
    descripcion: {
        type: String,
        minlength: 5,
        require: true,
    },
    elenco: {
        type: String,
        minlength: 1,
    },
    creadores: {
        type: String,
        minlength: 1,
    },
    imagen: {
        pequeno: {
            type: String,
            minlength: 1,
        },
        grande: {
            type: String,
            minlength: 1,
        },
    },
    co_categoria: {
        type: Number,
        min: 1,
    },
    co_clasificacion: {
        type: Number,
        min: 1,
    },
});

module.exports = mongoose.model("peliculas", FilmShema);
