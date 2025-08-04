function verificar(){
    var data = new Date()
    var ano = data.getFullYear()// Pega o ano atual do sistema
    var Fano = document.getElementById('txtano')//ano digitado
    var res = document.getElementById('resultado')//div onde o resultado será exibido

    //validação dos dados de entrada (ano vazio ou ano maior que o atual)
   if(Fano.value.length == 0 || Number(Fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    //se os dados forem válidos entra aqui e executa o restante do código
        var fsex = document.getElementsByName('radsex')//pega os elementos pelo name (retorna uma coleção)
        var idade = ano - Number(Fano.value)//calcula a idade
        var gênero = '' //cria a variável gênero
        var img = document.createElement('img') //cria a tag img
        img.setAttribute('id', 'foto') //define o id da tag img

        //verifica qual dos radio buttons foi selecionado
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-homem.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-mulher.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50){
                //adulta
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }

        res.style.textAlign = 'center' //alinha o texto ao centro
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adiciona a tag img dentro da div resultado
   }
}