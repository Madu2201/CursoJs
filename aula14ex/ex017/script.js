function tabuada(){
    // Recebe o valor do input e seleciona o elemento select
    let num = document.querySelector('#txtnum').value
    let sel = document.querySelector('#seltab')

    sel.innerHTML = '' /*Limpa o select antes de gerar uma nova tabuada, pois se não ficaria acumulando as tabuadas anteriores e é por isso que está fora do loop de repetição */

    // Verifica se o campo está vazio
    if(num.lenght == 0){
        window.alert('Por favor, digite um número!')
    } else {
        // Converte o valor para um número inteiro
        num = Number(num)

        // Loop para gerar a tabuada
        for(let contador = 1; contador <= 10; contador++){
            let item = document.createElement('option') // Cria um novo elemento <option> para o select
            item.text = `${num} x ${contador} = ${num * contador}` //Define o texto que vai aparecer no option (ex: "5 x 2 = 10")
            item.value = `tab${contador}` // Define o valor interno do option (pode ser usado para identificar cada linha)
            sel.appendChild(item) // Adiciona esse option dentro do select (mostra na tela)
        }
    }    
}