

function funcion(){
    return true;
}

console.log(funcion())

let asincrona = new Promise((a,b) => {

    if(funcion() === true){
        a("resuelto")
        setTimeout(() => {
            console.log("hola soy una promesa");
    
        },5000)
    }else{
        b("fallo")
    }   
})

asincrona
.then((a) => {
    console.log('respuesta:', a)
})
.catch((error) => {
    console.log('error: ',error)
})

function* generador(){

    let id =0
    while(true){
        id++
        yield id
        if(id >=5){
            return id
        }
    }


}

const gen = generador();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
