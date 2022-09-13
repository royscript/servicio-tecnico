//Parametros basicos para enrutamientos index
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
//-----Importar controladores---------
const index = require('./v1/controlador/index');
const persona = require('./v1/controlador/persona');
const boleta = require('./v1/controlador/boleta');


//--------MIDDLEWARE-----------
app.use(cors());//Para intercambiar recursos entre cliente y servidor, el argumento no es obligacion
app.use(express.json());//Para los JSON
app.use(bodyParser.urlencoded({ extended : true }));//para enviar los formularios al servidor
app.use(cookieParser());//Para las cookies

//--------APIS-----
app.use('/v1/', index);
app.use('/v1/persona/', persona);
app.use('/v1/boleta/', boleta);

app.listen(process.env.PORT_NODE,()=>{
    console.log("Servidor Node JS hola churrasco "+process.env.PORT_NODE);
});