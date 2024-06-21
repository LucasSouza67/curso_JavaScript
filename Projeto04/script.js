function tabuada(){
    let txtNum = document.getElementById('valor')
    let resp = document.getElementById('res')

    if (txtNum.value.length == 0){
        window.alert('--> [ERRO] <-- Insira um valor')
    }else{
        let num = Number(txtNum.value)
        resp.innerHTML = ``
        for (let i = 1; i <= 10; i++){ 
           let item = document.createElement('option')
           item.text = `${num} * ${i} = ${num*i}`
           item.value = `resp${i}`
           resp.appendChild(item)
        }
    }
}