const nombre = 'william'

const apellido = 'esteban'


const yo = [{
    Nombre: nombre,
    Apellido: apellido
}]

localStorage.setItem('yo', JSON.stringify(yo))

console.log(JSON.parse(localStorage.getItem('yo')))


document.cookie = "cookie=william;expires=" + new Date(2023,0,17,19).toString()

console.log(document.cookie)

