/**Body.addEventListener('onload', carrega)*/

function carrega(){
    let msg = document.getElementById('mensagem')
    let image = document.getElementById('image')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if (hora >= 0 && hora < 12){
        image.src = 'image/manha.png'
        document.body.style.backgroundColor = '#C07110'
    }else if (hora >= 12 && hora <= 18){
        image.src = 'image/tarde.png'
        document.body.style.backgroundColor = '#FBBB98'
    }else{
        image.src = 'image/noite.png'
        document.body.style.backgroundColor = '#AB9F9B'
    }
}
