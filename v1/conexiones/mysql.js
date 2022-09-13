require('dotenv').config();
const mysql = require('mysql');

class Mysql {
    constructor(){
        this.conexion = mysql.createPool({
            host : process.env.HOST_MYSQL,
            user : process.env.USER_MYSQL,
            password : 'Roy164289273yoR#',
            database : process.env.DATABASE_MYSQL
        });
    }
    consulta(sql, parametros){
        return new Promise((resolve, reject)=>{
            this.conexion.query(sql,parametros,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
    
    paginador(pagSiguiente, cantPorPag){
        pagSiguiente = (parseInt(pagSiguiente) - 1)*parseInt(cantPorPag);
        if(isNaN(pagSiguiente)) pagSiguiente = 0;
        cantPorPag = parseInt(cantPorPag);
        return ` LIMIT ${pagSiguiente}, ${cantPorPag}`;
    }
}
module.exports = new Mysql();