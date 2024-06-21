function inicio(){
    let a = document.getElementById('comeco')
    let b = document.getElementById('passo')
    let c = document.getElementById('fim')
    let exibe = document.getElementById('res')

    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0){
        window.alert('--> [ERRO] <--\n insira valores validos')
        res.innerHTML ='Impossível contar'
    }
    else{
        exibe.innerHTML = `Contando: <br>`
        let ini = Number(a.value)
        let passo = Number(b.value)
        let fim = Number(c.value)

        if (passo <= 0)
            passo = 1

        if (ini < fim){ 
            for(let i = ini; i <= fim; i+=passo){
                exibe.innerHTML += `${i} \u{1F449} `            
            }
        }
        else{
            for(let i = ini; i >= fim; i-=passo){
                exibe.innerHTML += `${i} \u{1F449} `            
            }
        }
         exibe.innerHTML += ` \u{1F3C1}`
    } 
}