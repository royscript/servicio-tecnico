var os = require('os');
const spawn = require('await-spawn');
/*
model: una cadena que especifica el modelo del núcleo de la CPU.
speed: un número que especifica la velocidad del núcleo de la CPU (en MHz).
times: Un objeto que contiene las siguientes propiedades:
    user: un número especifica el tiempo que la CPU ha pasado en modo usuario en milisegundos.
    nice: un número especifica el tiempo que la CPU ha pasado en modo agradable en milisegundos.
    sys: un número especifica el tiempo que la CPU ha estado en modo sys en milisegundos.
    idle: un número especifica el tiempo que la CPU ha pasado en modo inactivo en milisegundos.
    irq: un número especifica el tiempo que la CPU ha estado en modo irq en milisegundos.

*/

class SistemaOperativo {
    constructor(){
        this.CPU = os.cpus();
    }
    cantidadCPU(){
        return this.CPU.length;
    }
    informacionCPU(){
        return this.CPU;
    }
    interfazRed(){
        return os.networkInterfaces();
    }
    versionSO(){
        return os.version();
    }
    arquitecturaSO(){
        return os.arch();
    }
    ramTotal(){
        return os.totalmem()/1048576;
    }
    ramDisponible(){
        return memoriaRamLibreDelSistemaEnBytes/1048576;
    }
    async ejecutarBash(comando){
        try {
            const bl = await spawn('ls', ['-al'])
            return bl;
            console.log(bl.toString())
        } catch (e) {
            console.log(e.stderr.toString())
        }
    }
}

module.exports = new SistemaOperativo();