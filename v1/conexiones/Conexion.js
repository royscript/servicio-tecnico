class Conexion {
    constructor(){
        this.mysql = require('./mysql');
        this.mongo = require('./mongodb');
    }
}
module.exports = Conexion;