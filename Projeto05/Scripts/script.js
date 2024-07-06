let num = document.getElementById('numF')
let list = document.getElementById('lista')
let res = document.getElementById('output')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n <= 100)){
        return true
    }
    else{
        return false
    }
}
function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inList(num.value, valores)){
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
    }
    else{
        window.alert('--> [ERRO] <-- Insira um valor válido')
    }
}



function exibir(){
    
}



