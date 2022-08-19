const express = require('express');
const app = express();

app.get("/usuario", (request, response) => {
    const usuario = { nombre: "Daniel", apellido: "Cabrera" };
    response.json(usuario);
});
const puerto = 8000;
// eslint-disable-next-line no-template-curly-in-string
console.log("Estoy escuchando conexiones en el puerto ${puerto}! ");
app.listen(puerto);