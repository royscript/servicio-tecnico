const Conexion = require('../conexiones/Conexion');
class Boleta extends Conexion{
    constructor(){
        super();
        this.esquema = this.mongo.model('Boleta', new this.mongo.Schema({
            numeroDeBoleta : Number,
            fechaBoleta : Date,
            idEmpresa : Number,
            idSucursal : Number,
            idUsuario : Number,
            boletaActiva : Boolean,
            cliente : [{
                idCliente : Number
            }],
            detalleVenta : [{
                idProducto : Number,
                valorProductoBruto : Number,
                descuento : Number,
                cantidadProducto : Number,
                subTotalBruto : Number
            }],
            subTotalBruto : Number,
            neto : Number,
            iva : Number,
            descuentoTotal : Number,
            total : Number,
            mediosDePago : [{
                idMedioDePago : Number,
                montoPagado : Number
            }],
            vuelto : [{
                pagoCon : Number,
                vuelto : Number
            }],
            pieDepagina : {
                paginaWeb : String,
                mensaje : String
            }
        }));
    }
    async listarTodas(){
        return await this.esquema.find();
    }
    async listarEmpresaSucursal(idEmpresa,idSucursal){
        return await this.esquema.find({idEmpresa : idEmpresa, idSucursal : idSucursal});
    }
    async cantidadBoletasSucursal(idEmpresa,idSucursal){
        return await this.esquema.find({idEmpresa : idEmpresa, idSucursal : idSucursal}).count()+1;
    }
    async listarPorNumeroBoleta(numeroBoleta){
        return await this.esquema.find({ numeroBoleta : numeroBoleta});
    }
    async insertar(boleta){
        return await this.esquema.create(boleta);
    }
    async anular(idBoleta){
        return await this.esquema.updateOne({_id : idBoleta}, { boletaActiva : false });
    }
}
module.exports = Boleta;