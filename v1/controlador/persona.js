//Parametros enrutamientos personalizados
const router = require('express').Router();
const Persona = require('../modelo/Persona');
const persona = new Persona();

router.get("/listar",async (req, res)=>{
    const { body } = req;
    try {
        res.status(200).json({
			mongo :  await persona.listar(),
            mysql : await persona.mostrarPersona()
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.post("/crear",(req, res)=>{
    const { body } = req;
    const { nombre,apellidos } = body;
    persona.insertar(nombre,apellidos);
    try {
        res.status(200).json({
			datos : {
				hola : 'Persona creada'
			}
		})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
module.exports = router;