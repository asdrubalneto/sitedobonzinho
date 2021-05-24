alert('Bem vindo(a) ao site do Bonzinho!')



function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var dia = data.getday()
    var date = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
    
    msg.innerHTML = `Hoje é dia ${dia} do ${mes} de ${anos} e agora são ${hora}:${minuto}:${segundo}`
    if (hora >= 0 && hora <12){
        //Bom dia!
        img.src = 'solnasc.jpg'
        document.body.style.background = '#fd9b12'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'solpor.jpg'
        document.body.style.background = '#e6b2a7'

    }else{
        //Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#0a1819'
    }
}
