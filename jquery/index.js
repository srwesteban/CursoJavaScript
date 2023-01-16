

$(()=> {

    //$("#e1").hide()

    $(".hide-btn").click(() => {

        console.log("oculatando")
        $('h1').fadeOut()

    })
    $(".show-btn").click(() => {

        console.log("mostrando")
        $('h1').fadeIn()

    })

    $("li").dblclick(() => {

        $('h1').css({color: 'red'})

    })

    $(".add").click(() => {

        $('ul').append("<li>nuevo elemento</>")

    })

    $("li").mouseenter((elemt) => {

        elemt.target.style.color = 'blue'


    })
    $("li").mouseleave((elemt) => {

        elemt.target.style.color = 'black'


    })




})

