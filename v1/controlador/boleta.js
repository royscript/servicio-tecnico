//Parametros enrutamientos personalizados
const router = require('express').Router();
const Boleta = require('../modelo/Boleta');
const boleta = new Boleta();

router.post("/listar-todas",async (req, res)=>{
    const { body } = req;
    try {
        res.status(200).json({
			data :  await boleta.listarTodas(),
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post("/insertar",async (req, res)=>{
    const { body } = req;
    const { idEmpresa,idSucursal } = body;
    var numeroBoleta = await boleta.cantidadBoletasSucursal(idEmpresa,idSucursal);
    try {
        res.status(200).json({
            data : await boleta.insertar(
                 {
                    numeroDeBoleta : (numeroBoleta+1),
                    fechaBoleta : new Date(),
                    idEmpresa : 1,
                    idSucursal : 2,
                    boletaActiva : true,
                    idUsuario : 1,
                    cliente : [{
                        idCliente : 1
                    }],
                    detalleVenta : [{
                        idProducto : 1,
                        valorProductoBruto : 1000,
                        descuento : 0,
                        cantidadProducto : 1,
                        subTotalBruto : 1000
                    },{
                        idProducto : 2,
                        valorProductoBruto : 500,
                        descuento : 200,
                        cantidadProducto : 2,
                        subTotalBruto : 800
                    }],
                    subTotalBruto : 1800,
                    neto : 1513,
                    iva : 287,
                    descuentoTotal : 200,
                    total : 1800,
                    mediosDePago : [{
                        idMedioDePago : 1,
                        montoPagado : 1000
                    },{
                        idMedioDePago : 2,
                        montoPagado : 800
                    },
                ],
                    vuelto : [{
                        pagoCon : 800,
                        vuelto : 0
                    }],
                    pieDepagina : {
                        paginaWeb : "www.google.cl",
                        mensaje : "loko standen tiene sita"
                    }
                }
            ),
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.patch("/anular",async (req, res)=>{
    const { body } = req;
    const { idBoleta } = body;
    try {
        res.status(200).json({
            data : await boleta.anular(idBoleta)
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.post("/cantidad",async (req, res)=>{
    const { body } = req;
    const { idEmpresa,idSucursal } = body;
    try {
        res.status(200).json({
			data :  await boleta.cantidadBoletasSucursal(idEmpresa,idSucursal),
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;