

let fecha = new Date();

console.log(fecha)

let fechaNaciemiento = new Date(1992,08,28)

console.log(fechaNaciemiento)

let fechaMayor = fecha > fechaNaciemiento

console.log(fechaMayor)

let diaNaciemiento = fechaNaciemiento.getDate()

console.log(diaNaciemiento)

let mesNacimiento = fechaNaciemiento.getMonth()

console.log(mesNacimiento)

let añoNacimiento = fechaNaciemiento.getFullYear()

console.log(añoNacimiento)