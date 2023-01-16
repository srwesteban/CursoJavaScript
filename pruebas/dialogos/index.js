const boton = document.querySelector("#btn") // seleccionar con query 


boton.addEventListener("click", () => {

    alert("se ha hecho click") // tipo de mensaje de alerta

    confirm("aceptar?")
    ? console.log("aceptaste") // cuando acepto
    : console.log("no aceptaste") // cuando cancelo

})

const botonInfo = document.querySelector("#info") // seleccionar con query 


botonInfo.addEventListener("click", () => {

    const nombre = prompt("cual es tu nombre? ")

    if(nombre){

        console.log('tu nombre es ' + nombre)

    }else{
        console.log('no has introducido nada')
    }
})

const lista = [{
    nombre: "william",
    edad: 30
},
{
    nombre: 'juana',
    edad: 23
},
{
    nombre: 'paola',
    edad: 21
}]

console.table(lista)