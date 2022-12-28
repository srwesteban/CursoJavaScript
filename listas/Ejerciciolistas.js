

const listaCompras = ["pan", "leche", "arroz", "manzanas", "zanahoria" ]
console.log(listaCompras)

listaCompras.push("aceite de girasol")
console.log(listaCompras)

listaCompras.pop()
console.log(listaCompras)


const listaPeliculas = [
    {Titulo: "minions", Director:"alguien", Fecha: new Date("2011-11-01")},
    {Titulo: "titanic", Director:"guillermo", Fecha: new Date("2020-02-23")},
    {Titulo: "perfume", Director:"un frances", Fecha: new Date("2002-05-12")}
]

console.log(listaPeliculas)


const filtrar = listaPeliculas.filter(valor => valor.Fecha < new Date ("2010-01-01"))
console.log(filtrar)


const mapear = listaPeliculas.map((valor, i) => i+1+ " "+ valor.Director )
console.log(mapear)

const titulos = listaPeliculas.map((valor, i) => i+1+ " "+ valor.Titulo )
console.log(titulos)

const listaConcatenada = mapear.concat(" titulos: "+titulos)
console.log("directores: "+listaConcatenada)

const listaFactorPropagacion = [...mapear,...titulos]
console.log(listaFactorPropagacion)