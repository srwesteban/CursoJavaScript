

let nombre = "William";
let apellido = "Esteban ";
let estudiante = `${nombre +" "+ apellido}`

console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let longitud = estudiante.length;
console.log(longitud);

let primera = estudiante[0];
console.log(primera)

let ultima = estudiante.charAt(14);
console.log(ultima);

let sinEspacios = estudiante;
console.log(sinEspacios.trim().length); 

let bolean = estudiante.includes(nombre);
console.log(bolean)