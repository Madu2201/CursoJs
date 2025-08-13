// Pegando os elementos do HTML e armazenando em variáveis.
let num = document.querySelector('input#txtnum').value;
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = []; // Array para armazenar os valores adicionados

function isNumero(n) {
    // Verifica se o número está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n , l) {
    // Verifica se o número já está na lista.
    if (l.indexOf(Number(n)) != -1) {
        return true; // O número já está na lista
    } else {
        return false; // O número não está na lista
    }
}

function Adcionar(){
    let inputNum = document.querySelector('input#txtnum'); // Seleciona o input
    let num = inputNum.value; // Pega o valor atual do input

    if (isNumero(num) && !inLista(num, valores)){
        valores.push(Number(num));
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }

    inputNum.value = ''; // Limpa o input
    inputNum.focus(); // Foca novamente no input
}

function Finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length; // Total de valores adicionados
        let maior = valores[0]; // Inicializa o maior com o primeiro valor
        let menor = valores[0]; // Inicializa o menor com o primeiro valor
        let soma = 0; // Variável para armazenar a soma dos valores

        for (let posição in valores) {
            soma += valores[posição]; // Soma os valores
            if (valores[posição] > maior) {
                maior = valores[posição]; // Atualiza o maior valor
            }
            if (valores[posição] < menor) {
                menor = valores[posição]; // Atualiza o menor valor
            }
        }

        res.innerHTML = ''; // Limpa a div de resultados
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${(soma / tot).toFixed(2)}.</p>`;
    }
}
