const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll('.seccion')
const imagen = document.querySelector('.imagen')


parrafos.forEach(parrafo => {

    parrafo.addEventListener('dragstart', evento => {

        console.log('inicio de arrastre de '+ parrafo.innerText)
        parrafo.classList.add('dragging')
        evento.dataTransfer.setData("id", parrafo.id)
        evento.dataTransfer.setDragImage(imagen,0,0)

        imagen.addEventListener('dragenter',evento => {

            console.log('eliminar')
            parrafo.remove()
        }) 

    })
    parrafo.addEventListener('dragend', () => {

        parrafo.classList.remove('dragging')      

    }) 

   

})

secciones.forEach(seccion => {

    seccion.addEventListener('dragover', evento =>{
        evento.preventDefault()
        console.log('drag over')
    })

    seccion.addEventListener('drop',evento =>{
        console.log('dropp')
        const idParrafo = evento.dataTransfer.getData("id")
        console.log('parrafo id: ' + idParrafo)

        const p = document.getElementById(idParrafo)
        seccion.appendChild(p)   

    })    

})





