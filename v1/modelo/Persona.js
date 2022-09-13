const Conexion = require('../conexiones/Conexion');

class Persona extends Conexion{
    constructor(){
        super();
        this.esquema = this.mongo.model('Usuario', new this.mongo.Schema({
            nombre : String,
            apellidos : String
        }));
    }
    async listar(){
        return await this.esquema.find();
    }
    async insertar(nombre,apellidos){
        return await this.esquema.create({ nombre , apellidos})
    }
    async mostrarPersona(){
        return await this.mysql.consulta("select 'hola' from dual");
    }
}
module.exports = Persona;