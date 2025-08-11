function tabuada(){
    // Recebe o valor do input e seleciona o elemento select
    var num = document.querySelector('#txtnum').value
    var sel = document.querySelector('#seltab')

    sel.innerHTML = '' // Limpa o select antes de adicionar novos valores

    // Verifica se o campo está vazio
    if(num.lenght == 0){
        window.alert('Por favor, digite um número!')
    } else {
        // Converte o valor para um número inteiro
        num = Number(num)

        // Loop para gerar a tabuada
        for(var contador = 1; contador <= 10; contador++){
            var item = document.createElement('option') // Cria um novo elemento <option> para o select
            item.text = `${num} x ${contador} = ${num * contador}` //Define o texto que vai aparecer no option (ex: "5 x 2 = 10")
            item.value = `tab${contador}` // Define o valor interno do option (pode ser usado para identificar cada linha)
            sel.appendChild(item) // Adiciona esse option dentro do select (mostra na tela)
        }
    }    
}