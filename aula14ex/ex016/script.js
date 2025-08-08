function contar(){
    // Recuperando os elementos da página e guardando em variáveis
    let inicio = document.querySelector('input#txtinicio').value
    let fim = document.querySelector('input#txtfim').value
    let passo = document.querySelector('input#txtpasso').value
    let res = document.querySelector('div#resultado')
    let botao = document.querySelector('input#btncontar')

    // Alterando o estilo do botão após o clique
    botao.style.backgroundColor = 'blue'
    botao.style.color = 'white'

    // Verificando se os campos de início, fim e passo estão vazios. O .length retorna o número de caracteres digitados no campo
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        // Convertendo os valores digitados em números inteiros
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)

        // Verificando se o valor do passo é igual a zero ou negativo
        if(passo <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        // Iniciando a área de resultado
        res.innerHTML = 'Contando: '

        // Realizando a contagem crescente
        if(inicio < fim){
            for(let contador = inicio; contador <= fim; contador += passo){
                res.innerHTML += ` ${contador} \u{1F449}` // Adicionando o valor do contador na área de resultado
            }
        // Realizando a contagem regressiva
        } else {
            for(let contador = inicio; contador >= fim; contador -= passo){
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` // Adicionando a bandeira na área de resultado
    }
}