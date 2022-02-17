const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConexion = require("./config/database");

mongoose
    .connect(dbConexion.url,  { useUnifiedTopology: true,  useUnifiedTopology: true, useNewUrlParser: true }, dbConexion.options)
    .then(() => {
        console.log("Conexión exitosa");
    })
    .catch((err) => {
        console.log("El error es : " + err);
        process.exit();
    });

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.use(require("./routers/index"));
app.use(require("./routers/favorite_lis.router"));
app.use(require("./routers/film.router"));
app.use(require("./routers/user.router"));
app.use(require("./routers/classification.router"));
app.use(require("./routers/category.router"));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log("Servidor corre por el puerto: " + app.get("port"));
});
