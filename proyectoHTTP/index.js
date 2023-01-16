const boton = document.getElementById("btn")

boton.addEventListener('click', () => {

    alert('click en el boton')
})

const boton2 = document.querySelector("#btn") // seleccionar con query 

boton2.addEventListener("click", () => {

    console.log('Hola, estoy utilizando jQuery')

})