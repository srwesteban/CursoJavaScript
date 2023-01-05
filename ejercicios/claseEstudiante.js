
class Estudiante{

    nombre = 'william';

    asiganaturas = ['Javascript ', 'HTML ', 'CSS'];

    obtenerDatos(){
        return this.nombre +' '+ this.asiganaturas;
    }
}

const estudiante = new Estudiante();
console.log(estudiante.obtenerDatos());