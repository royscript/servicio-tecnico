//Parametros enrutamientos personalizados
const router = require('express').Router();
const sistemaOperativo = require('../modelo/SistemaOperativo');
router.get("/listar",(req, res)=>{
    const { body } = req;
    try {
        res.status(200).json({
			datos : {
				hola : 'hola Roy'
			}
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get("/cpu",(req, res)=>{
    const { body } = req;
    try {
        res.status(200).json({
			datos : {
				cpu : sistemaOperativo.informacionCPU()
			}
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.post("/bash",(req, res)=>{
    const { body } = req;
    try {
        res.status(200).json({
			datos : sistemaOperativo.ejecutarBash("ls -la")
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
module.exports = router;
