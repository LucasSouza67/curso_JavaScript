function verificar(){
    let data = new Date()
    let dataAtual = data.getFullYear()
    let forAno = document.getElementById('txtAno')
    let resp = document.getElementById('saida')

    if (forAno.value.length == 0  || forAno.value > dataAtual){
        window.alert('--> [ERRO!] <-- Verifique os dados e tente novamente')
    }
    else{
        let sexF = document.getElementsByName('sexo')
        let idade = dataAtual - Number(forAno.value)  
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexF[0].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'image/mulher_crianca.png')
            }
            else if (idade < 25){
                img.setAttribute('src', 'image/mulher_jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'image/mulher_adulta.png')
            }else{
                img.setAttribute('src', 'image/mulher_idosa.png')
            }
        } else if (sexF[1].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'image/homemCrinca.png')
            }
            else if (idade < 21){
                img.setAttribute('src', 'image/homem_jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'image/homem_adulto.png')
            }else{
                img.setAttribute('src', 'image/homem_idoso.png')
            }
        }

        resp.innerHTML = `Idade calculada ${idade} anos de um ${genero}`
        resp.appendChild(img)
    }
}