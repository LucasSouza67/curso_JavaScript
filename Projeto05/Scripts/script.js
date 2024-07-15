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
function adicionar(){
    if (isNumero(num.value) && !valores.includes(num.value)){
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    }
    else{
        window.alert('--> [ERRO] <-- Insira um valor válido')
    }
}
function soma(){
    let sum = 0
    for (let i in valores){
        sum +=  Number(valores[i])
    }
    return sum
}
function mediaN(){
    let sum = 0
    for (let i in valores){
        sum +=  Number(valores[i])
    }
    return sum / valores.length
}
function exibir(){
    let tam = valores.length
    let maxValue = Math.max(...valores)
    let minValue = Math.min(...valores)
    let media = mediaN()
    let sum = soma()
    res.innerHTML = `<p>Número de valores: ${tam}</p>`
    res.innerHTML += `<p>Maior valor: ${maxValue}</p>`
    res.innerHTML += `<p>Menor valor : ${minValue}</p>`
    res.innerHTML += `<p>Soma dos valores: ${sum}</p>`
    res.innerHTML += `<p>Media dos valores: ${media.toFixed(1)}</p>`
}



