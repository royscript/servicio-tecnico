require('dotenv').config();
const mongoose = require("mongoose");
const usuario = process.env.USER_MONGO;
const contrasena = process.env.PASSWORD_MONGO;
const bd = process.env.DATABASE_MONGO;//Base de datos o colección
const host = process.env.HOST_MONGO;//Usualmente es localhost, pero puede ser una IP o el 
                                        //nombre de un contenedor docker si es red interna en docker

mongoose.connect('mongodb://'+usuario+':'+contrasena+'@'+host+'/'+bd+'?authSource=admin');
module.exports = mongoose;